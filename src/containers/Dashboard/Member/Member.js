import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getMember } from "../../../api/memberAPI";

import { FaAngleLeft } from "react-icons/fa";
import { Button, Container, ContainerInline, FlexRow, Available } from "../../../components/CommonComponent";
import Spinner from "../../../components/Spinner";
import MemberImage from "../../../shared/member-img.png.png"

import ConfirmDiolog from "../../../components/ConfirmationDialog";
import {deleteMember} from "../../../api/memberAPI"

const ContainerInlineAlignLeft = styled(ContainerInline)`
    align-items: flex-start;
`;


const Member = ({ id, handleBackClick }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [member, setMember] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    useEffect(() => {

        setIsLoading(true);
        getMember(id)
            .then((response) => {
                if (!response.error) {
                    console.log(response.data)
                    setMember(response.data)

                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })


    }, [id]);

    const handleDelete = (confirmation) => {

        if (confirmation) {
            deleteMember(member.id);
        }
        setShowDeleteConfirmation(false);

    }


    return (
        <>
            <Container>
                <Button onClick={handleBackClick}>
                    <FaAngleLeft />
                </Button>
                {
                    !isLoading && member !== null ?
                        (
                            <>
                                <FlexRow>
                                    <ContainerInlineAlignLeft>
                                        <h1>{member.firstName}  {member.lastName}</h1>
                                        <h1>{member.address}</h1>
                                        <h1>{member.userType}</h1>
                                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type
                                            specimen member.  </p>

                                        

                                    </ContainerInlineAlignLeft>
                                    <ContainerInline>
                                        <img src={MemberImage} alt="member Cover" style={{ border: "1px solid black", width:"250px" }} />
                                    </ContainerInline>
                                </FlexRow>

                                <FlexRow>       
                                    <Button color="danger" onClick={() => setShowDeleteConfirmation(true)}>Delete</Button>    
                                </FlexRow>


                            
                            </>
                        )
                        :
                        (<Spinner />)

                }

            </Container>

            <ConfirmDiolog handleClose={handleDelete}
                show={showDeleteConfirmation}
                headerText={"Delete Confirmation"}
                detailText={"Are You Sure you want to delete this record. This action can't be undone."} />


         
        </>

    );

}

export default Member;
