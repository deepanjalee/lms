import React, {useState} from "react";

import Table from "../../components/Table"
import { FluidContainer } from "../../components/CommonComponent";
import Book from "./Book";


const Books = ({ catelog }) => {
    const [bookId, setSelectedBookId] = useState(null);

    // const upadteCategory = [...catelog,
    // {
    //     author: "Rowling",
    //     burrowedDate: "",
    //     burrowedMemberId: "",
    //     id: "3",
    //     isAvailable: true,
    //     title: "Harry",
    // },
    // {
    //     author: "Rowling",
    //     burrowedDate: "",
    //     burrowedMemberId: "",
    //     id: "3",
    //     isAvailable: false,
    //     title: "Harry",
    // }
    // ]

    const handleTableRowClick = (id) => {
        // console.log(id);
        setSelectedBookId(id);
    }

    const handleBackClickView = () => {
        setSelectedBookId(null);
    }


    return (

        bookId === null ? 
        <FluidContainer>
            <Table data={catelog} handleRowClick={handleTableRowClick} instruction="Please click the book row for display the more details" />

        </FluidContainer>
        : <Book id={bookId}  handleBackClick={handleBackClickView}/>
    );
}
export default Books;