import styled from "styled-components";

const SpinnerDiv = styled.div`
border: 10px solid ${(props) => props.theme.primary.move};
border-top: 10px solid ${(props) => props.theme.primary.main};
border-radius: 50% ;
width: 3em;
height: 3em;
margin-top: 18em;
animation: spin 2s linear infinite;
@keyframes spin {
    0%{
        transform:rotate(0deg);
    }
    100%{
        transform:rotate(360deg);
    }
}
`;

const SpinnerContainer = styled.div`
display:flex;
align-items:flex-start;
justify-content: center;
`;

const Spinner = () => (
    <SpinnerContainer >
        <SpinnerDiv />
    </SpinnerContainer>
);

export default Spinner