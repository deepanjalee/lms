import styled from "styled-components";

export const NavBar = styled.ul`
  list-style-type: none;
  margin:0;
  padding:0;
  overflow:hidden;
  background-color: ${(props) => props.theme.primary.main};
  position: fixed;
  top:0;
  z-index:1;
  width:100%
`;
export const NavItem = styled.li`
  float: left;
`;
export const NavLink = styled.a`
  color: ${(props) => props.theme.primary.textColor};
  font-weight: 700;
  text-align: center;
  display: block;
  text-decoration: none;
  padding: 14px 17px;

  &:hover {
    background-color: ${(props) => props.theme.primary.move};
    color: ${(props) => props.theme.primary.activeText};
  }

  &:active {
    color: ${(props) => props.theme.primary.activeText};
  }
`;
