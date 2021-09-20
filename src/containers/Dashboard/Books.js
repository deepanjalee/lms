import React from "react";

import Table from "../../components/Table"
import { FluidContainer } from "../../components/CommonComponent";


const Books = ({ catelog }) => {

    const upadteCategory = [...catelog,
    {
        author: "Rowling",
        burrowedDate: "",
        burrowedMemberId: "",
        id: "3",
        isAvailable: true,
        title: "Harry",
    }]
    return (
        <FluidContainer>
            <Table data={upadteCategory} />

        </FluidContainer>
    );
}
export default Books;