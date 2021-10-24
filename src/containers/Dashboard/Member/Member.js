import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from 'react-redux';

import { FaAngleLeft } from "react-icons/fa";
import {
  Button,
  Container,
  ContainerInline,
  FlexRow,
} from "../../../components/CommonComponent";
import Spinner from "../../../components/Spinner";
import MemberImage from "../../../shared/member-img.png.png";

import ConfirmDiolog from "../../../components/ConfirmationDialog";
import { deleteMember, editMemberData } from "../../../api/memberAPI";

import { updateMember, deleteMember as deleteMemberStore } from "../../../store/membersSlice";

import AddDialog from "./AddEditDialog";

const ContainerInlineAlignLeft = styled(ContainerInline)`
  align-items: flex-start;
`;

const Member = ({ id, handleBackClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  // const [member, setMember] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);


  const members = useSelector((state) => state.members.value);
  const member = members.find((element) => element.id === id);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   setIsLoading(true);
  //   getMember(id)
  //     .then((response) => {
  //       if (!response.error) {
  //         setMember(response.data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, [id]);

  const handleDelete = (confirmation) => {
    if (confirmation) {
      setIsLoading(true);
      deleteMember(member.id)
      .then((response) => {
        if(!response.error){
          dispatch(deleteMemberStore(response.data));
          handleBackClick();
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
    setShowDeleteConfirmation(false);
  };

  const handleEdit = (confirmation,data) => {
    if (confirmation) {
      setIsLoading(true);
      editMemberData(member.id,data)
      .then((response) => {
        if(!response.error){
          dispatch(updateMember(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
    setShowEditConfirmation(false);
  };

  return (
    <>
      <Container>
        <Button onClick={handleBackClick}>
          <FaAngleLeft />
        </Button>
        {!isLoading && member !== null ? (
          <>
            <FlexRow>
              <ContainerInlineAlignLeft>
                <h1>
                  {member.firstName} {member.lastName}
                </h1>
                <h1>{member.address}</h1>
                <h1>{member.userType}</h1>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen member.{" "}
                </p>
              </ContainerInlineAlignLeft>
              <ContainerInline>
                <img
                  src={MemberImage}
                  alt="member Cover"
                  style={{ border: "1px solid black", width: "250px" }}
                />
              </ContainerInline>
            </FlexRow>

            <FlexRow>
              <Button
                color="danger"
                onClick={() => setShowDeleteConfirmation(true)}
              >
                Delete
              </Button>

              <Button onClick= {() => setShowEditConfirmation(true)}> Edit </Button>
            </FlexRow>
          </>
        ) : (
          <Spinner />
        )}
      </Container>

      <ConfirmDiolog
        handleClose={handleDelete}
        show={showDeleteConfirmation}
        headerText={"Delete Confirmation"}
        detailText={
          "Are You Sure you want to delete this record. This action can't be undone."
        }
      />

<AddDialog
        isEdit = {true}
        show={showEditConfirmation}
        handleClose = {handleEdit}
        data = {member}
        
      />
    </>
  );
};

export default Member;
