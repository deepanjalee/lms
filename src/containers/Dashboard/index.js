import React, { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";

import Tabs from "../../components/Tabs";
import Books from "./Book/index";
import Members from "./Member/index";

import { getBooks } from "../../api/bookAPI";
import { getMembers } from "../../api/memberAPI";

const Dashboard = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [books, setBooks] = useState([]);
    const [members, setMembers] = useState([]);

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
    }, []);

    useEffect(() => {
        setIsLoading(true);
        getMembers()
            .then((response) => {
                if (!response.error) {
                 console.log(response.data);
                    setMembers(response.data)
                }

            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);
 


    const contents = [
        { title: "Books", elements: <Books catelog={books} /> },
        { title: "Members", elements: <Members catelog={members} /> },
    ];

    return (
        isLoading ? <Spinner /> : <Tabs contents={contents} />
    )
}

export default Dashboard