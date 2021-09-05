import { Header, Main,Footer} from "./components/Layouts"
import {NavBar,NavItem,NavLink} from "./components/NavBar"


function App() {
  return (
    <>
    <Header>
<NavBar>
  <NavItem>
    <NavLink href="#">
      Home 
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink>
      About 
    </NavLink>
  </NavItem>
</NavBar>
    </Header>
    <Main>This is Main Section</Main>
    <Footer>Footer Section</Footer>
    </>
  
  );
}

export default App;
