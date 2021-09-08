import { ThemeProvider } from "styled-components";
import { GiBookshelf } from "react-icons/gi";

import { Header, Main,Footer} from "./components/Layouts"
import {NavBar,NavItem,NavLink} from "./components/NavBar"


function App() {

  const theme = {
    primary : {
      main : "#00bbff",
      links : "#21f1fc",
      move : "#29c2ff",
      textColor : "#00324d",
      activeText : "#0373ad"

    },

    secondary : {
      main : "#ff9617",
      links : "#ffd026",
      move : "#ffc04a",
      textColor : "#4a3a1d",
      activeText : "#695025"

    }
   
  }
  return (
    <ThemeProvider theme={theme}>
    <Header>
<NavBar>
  <NavItem>
    <NavLink href="#">
    <GiBookshelf/>
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
      Catelog 
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink>
      Dashboard 
    </NavLink>
  </NavItem>
</NavBar>
    </Header>
    <Main>This is Main Section</Main>
    <Footer>Footer Section</Footer>
    </ThemeProvider>
  
  );
}

export default App;
