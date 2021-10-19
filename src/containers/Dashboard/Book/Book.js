import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from 'react-redux';

import { FaAngleLeft } from "react-icons/fa";
import {
  lendBook,
  returnBook,
  deleteBook,
} from "../../../api/bookAPI";
import {
  Button,
  Container,
  ContainerInline,
  FlexRow,
  Available,
} from "../../../components/CommonComponent";
import Spinner from "../../../components/Spinner";

import SingleBookImage from "../../../shared/book-img.png";
import ConfirmDiolog from "../../../components/ConfirmationDialog";
import LendDialog from "./LendDialog";
import { getTodayDate } from "../../../shared/utils";
import { updateBook,deleteBook as deleteBookStore } from "../../../store/booksSlice";

const ContainerInlineAlignLeft = styled(ContainerInline)`
  align-items: flex-start;
`;

const Book = ({ id, handleBackClick }) => {
  const [isLoading, setIsLoading] = useState(false);
 
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showLendConfirmation, setShowLendConfirmation] = useState(false);
  const [showReturnConfirmation, setShowReturnConfirmation] = useState(false);

  
  const books = useSelector((state) => state.books.value);
  const book = books.find((element) => element.id === id);

  const dispatch = useDispatch();

  const handleDelete = (confirmation) => {
    if (confirmation) {
      setIsLoading(true);
      deleteBook(book.id)
      .then((response) => {
        if(!response.error){
         
          dispatch(deleteBookStore(response.data));
          handleBackClick();

        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
    setShowDeleteConfirmation(false);
  };
  const handleLend = (confirmation, memberId) => {
    if (confirmation) {
      setIsLoading(true);
      lendBook(book.id, memberId, getTodayDate())
      .then((response)=>{
        if(!response.error){
       
          dispatch(updateBook(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
    setShowLendConfirmation(false, null);
  };
  const handleReturn = (confirmation) => {
    if (confirmation) {
      setIsLoading(true);
      returnBook(book.id)
      .then((response) => {
        if(!response.error){
          dispatch(updateBook(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
    setShowReturnConfirmation(false);
  };

 

  return (
    <>
      <Container>
        <Button onClick={handleBackClick}>
          <FaAngleLeft />
        </Button>
        {!isLoading && book !== null ? (
          <>
            <FlexRow>
              <ContainerInlineAlignLeft>
                <h1>{book.title}</h1>
                <h1>{book.author}</h1>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </p>

                {book.isAvailable ? (
                  <>
                    <Available>Book Available</Available>
                  </>
                ) : (
                  <>
                    <h4> {`Borrowed by : ${book.burrowedMemberId}`} </h4>
                  </>
                )}
              </ContainerInlineAlignLeft>
              <ContainerInline>
                <img
                  src={SingleBookImage}
                  alt="Book Cover"
                  style={{ border: "1px solid black" }}
                />
              </ContainerInline>
            </FlexRow>

            <FlexRow>
              {book.isAvailable ? (
                <>
                  <Button onClick={() => setShowLendConfirmation(true)}>
                    Lend
                  </Button>
                  <Button
                    color="danger"
                    onClick={() => setShowDeleteConfirmation(true)}
                  >
                    Delete
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={() => setShowReturnConfirmation(true)}>
                    Return
                  </Button>
                </>
              )}
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

      <LendDialog handleConfirm={handleLend} show={showLendConfirmation} />

      <ConfirmDiolog
        handleClose={handleReturn}
        show={showReturnConfirmation}
        headerText={"Return Confirmation"}
        detailText={"Are You Sure you want to Return this Book."}
      />
    </>
  );
};

export default Book;
