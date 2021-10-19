import React, { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";

import { useSelector, useDispatch } from 'react-redux'
import { setBooks } from '../../store/booksSlice'

import Tabs from "../../components/Tabs";
import Books from "./Book/index";
import Members from "./Member/index";

import { getBooks } from "../../api/bookAPI";
import { getMembers } from "../../api/memberAPI";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
 
  const [members, setMembers] = useState([]);

  const books = useSelector((state) => state.books.value);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    getBooks()
      .then((response) => {
        if (!response.error) {
         
          dispatch(setBooks(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    getMembers()
      .then((response) => {
        if (!response.error) {
          setMembers(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const contents = [
    { title: "Books", elements: <Books catelog={books} /> },
    { title: "Members", elements: <Members catelog={members} /> }
  ];

  return isLoading ? <Spinner /> : <Tabs contents={contents} />;
};

export default Dashboard;
