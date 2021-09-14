import { ThemeProvider } from "styled-components";
import { GiBookshelf } from "react-icons/gi";
import React, {Suspense} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header, Main, Footer } from "./components/Layouts"
import { NavBar, NavItem, NavLink } from "./components/NavBar"

import {DASHBOARD,CATELOG} from "./shared/router"
import Spinner from "./components/Spinner";

const Dashboard = React.lazy(()=> {
return import('./containers/Dashboard');
});


function App() {

  let routes = 
  <Suspense fallback={<Spinner />}>
  <Switch>
          <Route path={DASHBOARD} component={Dashboard} />
          <Route path={CATELOG} component={Spinner} />         
        </Switch>;
        </Suspense>
  const theme = {
    primary: {
      main: "#00bbff",
      links: "#21f1fc",
      move: "#29c2ff",
      textColor: "#00324d",
      activeText: "#0373ad"

    },

    secondary: {
      main: "#ff9617",
      links: "#ffd026",
      move: "#ffc04a",
      textColor: "#4a3a1d",
      activeText: "#695025"

    },

    spacing: (factor) => `${factor*8}px`,

  }
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <NavBar>
          <NavItem>
            <NavLink href={DASHBOARD}>
              <GiBookshelf />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={CATELOG}>
              Catelog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={DASHBOARD}>
              Dashboard
            </NavLink>
          </NavItem>
        </NavBar>
      </Header>
      <Main>
        <Router>
          {routes}
        </Router>



      </Main>
      <Footer>Footer Section</Footer>
    </ThemeProvider>

  );
}

export default App;
