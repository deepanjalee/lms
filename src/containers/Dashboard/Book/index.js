import React, { useState } from "react";

import { IoAdd } from "react-icons/io5";


import Table from "../../../components/Table"
import { FluidContainer, Container } from "../../../components/CommonComponent";
import Book from "./Book";
import { Button } from "../../../components/CommonComponent";



const Books = ({ catelog }) => {
    const [bookId, setSelectedBookId] = useState(null);

    const handleTableRowClick = (id) => {
        setSelectedBookId(id);
    }

    const handleBackClickView = () => {
        setSelectedBookId(null);
    }


    return (
        
        bookId === null ?
        <>
        <Container>
        <Button rounded> <IoAdd /> </Button>
        </Container>
      
            <FluidContainer>

               
                <Table data={catelog} handleRowClick={handleTableRowClick} instruction="Please click the book row for display the more details" />

            </FluidContainer>
            </>
            : <Book id={bookId} handleBackClick={handleBackClickView} />
    );
}
export default Books;