import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";


function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path="/search">
            <Search />
            <SearchResults />
          </Route>
          
          <Route exact path={["/", "/createaccount"]}>
            <CreateAccount />
          </Route>
          
          <Route exact path="/login">
            <Login />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;