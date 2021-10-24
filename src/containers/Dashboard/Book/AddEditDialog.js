import React, { useState } from "react";

import { FlexRow, Container } from "../../../components/CommonComponent";
import { Model, DialogBox } from "../../../components/Model";
import { Button } from "../../../components/CommonComponent";
import Input from "../../../components/Input";

export default function AddDialog({ isEdit =false, handleClose, show, data }) {
  const [title, setTitle] = useState(isEdit && data && data.title ? data.title : "");
  const [author, setAuthor] = useState(isEdit && data && data.author ? data.author : "");

  const clearInputs = () => {
    setTitle("");
    setAuthor("");
  };

  const sendDone = () => {
    if (title !== "" && author !== "") {
      const data = { title, author };
      clearInputs();
      handleClose(true, data);
    } else if (title === "") {
      window.alert("Please Fill the title Feild");
    } else {
      window.alert("Please Fill either title or author Feild");
    }
  };

  const sendCancel = () => {
    !isEdit && clearInputs();
    handleClose(false, null);
  };

  return (
    <Model show={show}>
      <DialogBox>
        <h1> {isEdit ? "Edit" : "Add"} Book </h1>
        <Container alignItems="center" disableFullWidth>
          <Input
            lable="Title"
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            name="title"
            required
            minLength="1"
          />

          <Input
            lable="Author"
            value={author}
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            id="author"
            name="author"
            required
            minLength="1"
          />
        </Container>

        <FlexRow>
          <Button onClick={sendDone}> {isEdit ? "Edit" : "Add"} Book</Button>
          <Button onClick={sendCancel} color="danger">
            Cancel
          </Button>
        </FlexRow>
      </DialogBox>
    </Model>
  );
}
