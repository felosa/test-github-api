import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card, Typography } from "@material-ui/core";

export const OneUser = ({ user, setFollowers }) => {
  const callFollowers = () => {
    axios
      .get(`https://api.github.com/users/${user.login}/followers`)
      .then(res => {
        console.log(res.data);
        setFollowers(res.data);
      })
      .catch();
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ marginTop: "50px", display: "flex", width: "600px" }}>
        <div>
          <img style={{ height: "300px" }} src={user.avatar_url} alt=""></img>
        </div>
        <div style={{ justifyContent: "center" }}>
          <p>Nickname: {user.login}</p>
          <p>Type: {user.type}</p>
          <a href={user.html_url} target="_blank" alt="">
            Open profile in GitHub
          </a>
          <br></br>
          <Link to="/list">
            <Button onClick={() => callFollowers()}>
              <p>Followers</p>
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};
