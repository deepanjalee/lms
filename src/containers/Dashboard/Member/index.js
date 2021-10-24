import React, { useState } from "react";

import { useDispatch } from 'react-redux'

import { addMemberData } from "../../../api/memberAPI";
import { addMember as addMemberStore } from "../../../store/membersSlice";
import { IoAdd } from "react-icons/io5";

import Table from "../../../components/Table";
import { FluidContainer, Container } from "../../../components/CommonComponent";
import Member from "./Member";

import { Button } from "../../../components/CommonComponent";

import AddDialog from "./AddEditDialog";

const Members = ({ catelog }) => {
  const [memberId, setSelectedMemberId] = useState(null);
  const [addMember, setAddMember] = useState(null);

  const dispatch = useDispatch();

  const handleTableRowClick = (id) => {
    setSelectedMemberId(id);
  };

  const handleBackClickView = () => {
    setSelectedMemberId(null);
  };

  const handleAddMember = (confirmation, data) => {
    if (confirmation) {
      addMemberData(data)
      .then((response) => {
        if(!response.error){
          dispatch(addMemberStore(response.data));
        }
      }
      )
      .catch((error) => {
        console.log(error);
      });
    }
    setAddMember(false);
  };

  return memberId === null ? (
    <>
      <Container>
        <Button rounded onClick={() => setAddMember(true)}>
          {" "}
          <IoAdd />{" "}
        </Button>
      </Container>

      <FluidContainer>
        <Table
          data={catelog}
          handleRowClick={handleTableRowClick}
          instruction="Please click the Member row for display the more details"
        />
      </FluidContainer>

      <AddDialog show={addMember} handleClose={handleAddMember} />
    </>
  ) : (
    <Member id={memberId} handleBackClick={handleBackClickView} />
  );
};
export default Members;
