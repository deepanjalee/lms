import React, { useEffect, useState } from "react"
import Spinner from "../../components/Spinner";

import Tabs from "../../components/Tabs";
import Books from "./Books";

import { getBooks } from "../../api/bookAPI";



const Dashboard = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [books,setBooks] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getBooks()
            .then((response) => {
                if (!response.error) {
                    // console.log(response.data);
                    setBooks(response.data)
                }

            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    const contents = [
        { title: "Books", elements: <Books catelog={books} />},
        { title: "Members", elements: <h1>Members contenets go hear</h1> },
    ];

    return (
        isLoading ? <Spinner /> :books.length > 0 && <Tabs contents={contents} /> 
    )


}

export default Dashboard
