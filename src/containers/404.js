import styled from "styled-components";

const FluidContainer = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

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