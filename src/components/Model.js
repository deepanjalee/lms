import styled from "styled-components"

export const Model = styled.div`
    z-index: auto;
    display : ${({show}) => (show ? "block" : "none")};
    position: fixed;
    top:0;
    left:0;
    height:100vh;
    width:100%;
    background:rgba(0,0,0,0.5);

`;

export const DialogBox = styled.div`
    position: fixed;
    background:  ${props => props.theme.danger.white};
    width:35%;
    height: auto;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 1em;
    top:50%;
    left:50%;
    color:rgba(0,0,139,0.7);
`;