import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { Users } from "./components/Users";
import Search from "./components/Search";

const App = () => {
  const [searchUsers, setSearchUsers] = useState("");

  // useEffect(() => {}, []);

  const changeSearch = actualSearch => {
    setSearchUsers(actualSearch);
  };
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header> */}
      <Search changeSearch={value => changeSearch(value)}></Search>
      {/* <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Users
              {...props}
            />
          )}
        />
      
      </Switch> */}
    </div>
  );
};

export default App;
