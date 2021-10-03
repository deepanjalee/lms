import styled from "styled-components";

import { FluidContainer } from "../components/CommonComponent";

const Title = styled.h1`
    font-size: 7.5em;
    margin-bottom: 0;
`;
const SubTitle = styled.h5`
    font-size: 5em;
    margin-bottom: 0;
`;

const NotFound = () => (
    <FluidContainer >
        <Title>404 Not Found !</Title>
        <SubTitle>This is not valid Page</SubTitle>
    </FluidContainer>
);

export default NotFound

//Valid Page links Add 