import styled from "styled-components";

export const FluidContainer = styled.div`
display:flex;
justify-content: 'space-around';
align-items: center;
flex-direction: column;

`;

export const Container = styled.div`
display:flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
padding: 1em;

`;

export const ContainerInline = styled.div`
display:flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
padding:1em;
`;

export const FlexRow = styled.div`
display:flex;
justify-content: center;
align-items: flex-start;
padding:1em;

`;


export const Button = styled.button`
background-color: ${props => props.theme.primary.main};
border:none;
border-radius: 50px;
padding: 5px 30px;
cursor:pointer;
&:hover {
    background-color: ${props => props.theme.primary.move};
    color: ${props => props.theme.primary.activeText};
    
  }
`;

export const Available = styled.h4`
color: red;

`;


