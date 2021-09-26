import React from "react";

import Table from "../../components/Table"
import { FluidContainer } from "../../components/CommonComponent";


const Books = ({ catelog }) => {

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
        console.log(id);
    }
    return (
        <FluidContainer>
            <Table data={catelog} handleRowClick={handleTableRowClick} instruction="Please click the book row for display the more details" />

        </FluidContainer>
    );
}
export default Books;