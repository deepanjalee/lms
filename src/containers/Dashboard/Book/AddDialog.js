import React, { useState } from "react";

import { FlexRow, Container } from "../../../components/CommonComponent";
import { Model, DialogBox } from "../../../components/Model";
import { Button } from "../../../components/CommonComponent";
import Input from "../../../components/Input";

export default function AddDialog({ handleClose, show }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

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
    clearInputs();
    handleClose(false, null);
  };

  return (
    <Model show={show}>
      <DialogBox>
        <h1> Add Book </h1>
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
          <Button onClick={sendDone}>Add Book</Button>
          <Button onClick={sendCancel} color="danger">
            Cancel
          </Button>
        </FlexRow>
      </DialogBox>
    </Model>
  );
}
