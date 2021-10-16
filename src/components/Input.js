import styled from "styled-components";
import { Container } from "./CommonComponent";

const Lable = styled.label`
  font-size: 0.75em;
  margin-bottom: 0.1em;
  disply: block;
`;

const StyledInput = styled.input`
  border: 1px solid ${(props) => props.theme.primary.ash};
  padding: 0.5em;
  border-radius: 0.3em;
  margin-bottom: 0.1em;
  width: 100%;
  box-sizing: border-box;
`;

export default function Input({ lable, value, onChange, ...rest }) {
  return (
    <Container>
      <Lable>{lable}</Lable>
      <StyledInput value={value} onChange={onChange} {...rest} />
    </Container>
  );
}
