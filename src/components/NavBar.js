import styled from "styled-components";

export const NavBar = styled.ul`
list-style-type: none;
margin:0;
padding:0;
overflow:hidden;
background-color: #333;
`;
export const NavItem = styled.li`
float:left;
`;
export const NavLink = styled.a`
color: white;
text-align:center;
display:block;
text-decoration: none;
padding: 14px 17px;


&:hover {
    background-color: #29c2ff;
    
  }

&:active{
    color:#004763;
}
`;

