import React, { useState } from "react";

import { FlexRow, Container } from "../../../components/CommonComponent";
import { Model, DialogBox } from "../../../components/Model";
import { Button, Select } from "../../../components/CommonComponent";
import Input from "../../../components/Input";

export default function AddDialog({ handleClose, show }) {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nic, setNic] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [userType, setUserType] = useState("");

  const clearInputs = () => {
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setNic("");
    setContactNumber("");
    setAddress("");
    setUserType("");
  };

  const sendDone = () => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      nic !== "" &&
      contactNumber !== "" &&
      address !== "" &&
      userType !== ""
    ) {
      const data = {
        firstName,
        middleName,
        lastName,
        nic,
        contactNumber,
        address,
        userType,
      };
      clearInputs();
      handleClose(true, data);
    } else if (firstName === "") {
      window.alert("First name can't be Empty");
    } else if (lastName === "") {
      window.alert("Last name can't be Empty");
    } else if (nic === "") {
      window.alert("NIC can't be Empty");
    } else if (contactNumber === "") {
      window.alert("Contact Number can't be Empty");
    } else if (address === "") {
      window.alert("Address can't be Empty");
    } else if (userType === "") {
      window.alert("User Type can't be Empty");
    } else {
      window.alert("Please Required Feild");
    }
  };

  const sendCancel = () => {
    clearInputs();
    handleClose(false, null);
  };

  // id:"2",
  // firstName:"Nuwan",
  // middleName:"MAlinka",
  // lastName:"Silva",
  // nic:"95339336V",
  // contactNumber:"0778325432",
  // address:"Gall",
  // userType:"University",

  // setFirstName("");
  // setMiddleName("");
  // setLastName("");
  // setNic("");
  // contactNumber("");
  // setAddress("");
  // setUserType("");

  return (
    <Model show={show}>
      <DialogBox>
        <h1> Add Member </h1>
        <Container alignItems="center" disableFullWidth>
          <Input
            lable="First name"
            value={firstName}
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            id="firstName"
            name="firstName"
            required
            minLength="1"
          />

          <Input
            lable="Middle name"
            value={middleName}
            type="text"
            onChange={(e) => setMiddleName(e.target.value)}
            id="middleName"
            name="middleName"
            minLength="1"
          />

          <Input
            lable="Last name"
            value={lastName}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            id="lastName"
            name="lastName"
            required
            minLength="1"
          />

          <Input
            lable="NIC"
            value={nic}
            type="text"
            onChange={(e) => setNic(e.target.value)}
            id="nic"
            name="nic"
            required
            minLength="1"
            maxLength="10"
          />

          <Input
            lable="Contact Number"
            value={contactNumber}
            type="text"
            onChange={(e) => setContactNumber(e.target.value)}
            id="contactNumber"
            name="contactNumber"
            required
            minLength="1"
            maxLength="10"
          />

          <Input
            lable="Address"
            value={address}
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            id="address"
            name="address"
            required
            minLength="1"
            maxLength="10"
          />

          <Container>
            <label style={{ fontSize: "0.75em" }}>User Type </label>
            <Select
              id="userType"
              onChange={(e) => setUserType(e.target.value)}
              value={userType}
              style={{ marginTop: "0.5em", marginleft: "0" }}
            >
              <option value="">--Please Select User Type--</option>
              <option value="School">School</option>
              <option value="University">University</option>
              <option value="Employed">Employed</option>
            </Select>
          </Container>
        </Container>

        <FlexRow>
          <Button onClick={sendDone}>Add Book</Button>
          <Button onClick={sendCancel} color="danger">
            Cancel
          </Button>
        </FlexRow>
      </DialogBox>
    </Model>
  );
}
