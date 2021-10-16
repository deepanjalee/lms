import styled from "styled-components";

export const Header = styled.header`
  height: 10vh;
`;

export const Main = styled.section`
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = styled.footer`
  height: 5vh;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.primary.main};
  align-items: center;
`;
