import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { Users } from "./components/Users";
import { OneUser } from "./components/OneUser";
import { NavBar } from "./components/NavBar";
import Search from "./components/Search";

const App = () => {
  const [users, setUsers] = useState([]);
  const [oneUser, setOneUser] = useState("");
  const [search, setSearch] = useState("");

  // useEffect(() => {}, []);

  const changeSearch = actualSearch => {
    axios
      .get(
        `https://api.github.com/search/users?q=${actualSearch}+type:user+in:login`
      )
      .then(res => {
        setSearch(actualSearch);
        setUsers(res.data.items);
        setOneUser("");
      })
      .catch();
  };

  const removeUsers = noUsers => {
    setUsers([]);
    setOneUser("");
  };

  const setUser = actualUser => {
    setOneUser(actualUser);
  };

  const setFollowers = followers => {
    setUsers(followers);
  };

  return (
    <div className="App">
      <NavBar removeUsers={remove => removeUsers(remove)}></NavBar>
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Search changeSearch={value => changeSearch(value)} {...props} />
          )}
        />
        <Route
          exact
          path="/list"
          render={props => (
            <Users
              search={search}
              changeSearch={value => changeSearch(value)}
              users={users}
              user={oneUser}
              setOneUser={oneUser => setUser(oneUser)}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/user"
          render={props => (
            <OneUser
              user={oneUser}
              setFollowers={followers => setFollowers(followers)}
              {...props}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
