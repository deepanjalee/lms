import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { useDispatch } from 'react-redux'

import { addBookData } from "../../../api/bookAPI";
import { addBook as addBookStore } from "../../../store/booksSlice";

import Table from "../../../components/Table";
import { FluidContainer, Container } from "../../../components/CommonComponent";
import Book from "./Book";
import { Button } from "../../../components/CommonComponent";
import AddDialog from "./AddDialog";

const Books = ({ catelog }) => {
  const [bookId, setSelectedBookId] = useState(null);
  const [addBook, setAddBook] = useState(null);

    const dispatch = useDispatch();

  const handleTableRowClick = (id) => {
    setSelectedBookId(id);
  };

  const handleBackClickView = () => {
    setSelectedBookId(null);
  };

  const handleAddBook = (confirmation, data) => {
    if (confirmation) {
      addBookData(data)
      .then((response) => {
        if(!response.error){
          dispatch(addBookStore(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
    setAddBook(false);
  };

  return bookId === null ? (
    <>
      <Container>
        <Button rounded onClick={() => setAddBook(true)}>
          {" "}
          <IoAdd />{" "}
        </Button>
      </Container>

      <FluidContainer>
        <Table
          data={catelog}
          handleRowClick={handleTableRowClick}
          instruction="Please click the book row for display the more details"
        />
      </FluidContainer>

      <AddDialog show={addBook} handleClose={handleAddBook} />
    </>
  ) : (
    <Book id={bookId} handleBackClick={handleBackClickView} />
  );
};
export default Books;
