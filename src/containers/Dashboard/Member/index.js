import React, { useState } from "react";

import { addMemberData } from "../../../api/memberAPI";

import { IoAdd } from "react-icons/io5";

import Table from "../../../components/Table";
import { FluidContainer, Container } from "../../../components/CommonComponent";
import Member from "./Member";

import { Button } from "../../../components/CommonComponent";

import AddDialog from "./AddDialog";

const Members = ({ catelog }) => {
  const [memberId, setSelectedMemberId] = useState(null);

  const [addMember, setAddMember] = useState(null);

  const handleTableRowClick = (id) => {
    setSelectedMemberId(id);
  };

  const handleBackClickView = () => {
    setSelectedMemberId(null);
  };

  const handleAddMember = (confirmation, data) => {
    if (confirmation) {
      addMemberData(data);
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
