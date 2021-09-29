import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { FaAngleLeft } from "react-icons/fa";
import { getBook } from "../../../api/bookAPI";
import { Button, Container, ContainerInline, FlexRow, Available } from "../../../components/CommonComponent";
import Spinner from "../../../components/Spinner";

import SingleBookImage from "../../../shared/book-img.png"

const ContainerInlineAlignLeft = styled(ContainerInline)`
align-items:flex-start;
`;


const Book = ({ id, handleBackClick }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [book, setBook] = useState(null);

    useEffect(() => {

        setIsLoading(true);
        getBook(id)
            .then((response) => {
                if (!response.error) {
                    console.log(response.data)
                    setBook(response.data)

                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })


    }, [id]);

    return (
        <Container>
            <Button onClick={handleBackClick}>
                <FaAngleLeft />
            </Button>
            {
                !isLoading && book !== null ?
                    (
                        <>
                    <FlexRow>
                        <ContainerInlineAlignLeft>
                            <h1>{book.title}</h1>
                            <h1>{book.author}</h1>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.  </p>

                                {book.isAvailable ? (
                                    <>
                                    <Available>Book Available</Available>
                                    </>
                                ) :
                                ( <>
                                <h4> {`Borrowed by : ${book.burrowedMemberId}`} </h4>
                                </> )
                                }

                        </ContainerInlineAlignLeft>
                        <ContainerInline>
                            <img src={SingleBookImage} alt="Book Cover" style={{ border: "1px solid black" }} />
                        </ContainerInline>
                    </FlexRow>

                    <FlexRow>
                        {book.isAvailable ? 
                        (
                            <>
                            <Button onClick= {()=> console.log("Call me API")}>Lend</Button>
                            <Button danger onClick= {()=> console.log("Call Delete me API")}>Delete</Button>
                           
                            </>
                        )
                        :
                        (
                            <>
                             <Button onClick= {()=> console.log("Call Return me API")}>Return</Button>
                            </>
                        )
                        }
                    </FlexRow>
                    </>
                    ) 
                     :
                    (<Spinner />)

            }

        </Container>
    );

}

export default Book