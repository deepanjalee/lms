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
flex: 1 1 0;
display:flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
padding:1em;
text-align:left;
`;

export const FlexRow = styled.div`
display:flex;
justify-content: center;
align-items: flex-start;
padding:1em;

`;


export const Button = styled.button`
background-color: ${(props) => props.danger ?  props.theme.danger.main :  props.theme.primary.main};
border:none;
border-radius: 50px;
padding: 5px 30px;
cursor:pointer;
&:hover {
    background-color: ${(props) => props.danger ?  props.theme.danger.dark :  props.theme.primary.main};
    color:  ${(props) => props.danger ?  props.theme.danger.white :  props.theme.primary.activeText};
    
  }
  margin-right: 2em;
`;

export const Available = styled.h4`
color:  ${props => props.theme.danger.dark};

`;


