import styled from "styled-components";
//
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
  background-color: ${(props) => {
    switch (props.color){
      case "danger":
      return props.theme.danger.main ;
      case "primary":
      return props.theme.primary.main;
      default:
      return props.theme.primary.links;
    }
  }};
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
// Available component move to the appropriate component

export const Select = styled.select`
    height: 2.5em;
    width: 100%;
    background: ${props => props.theme.danger.white};
    color: ${props => props.theme.primary.ash};
    padding: 0.5em;
    font-size: 0.8em;
    border: 1px solid ${props => props.theme.primary.ash};
    border-radius: 0.3em;
    margin-left: 0.5em;
      option{
        color: ${props => props.theme.primary.ash};
        background: ${props => props.theme.danger.white};
        display:flex;
        white-space:pre;
        min-height: 1em;
        padding: 0px 2px 1px;
        }

`;