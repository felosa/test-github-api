import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Card, CardActionArea } from "@material-ui/core";

export const OneUser = ({ user, setFollowers }) => {
  const callFollowers = () => {
    axios
      .get(`https://api.github.com/users/${user.login}/followers`)
      .then(res => {
        setFollowers(res.data);
      })
      .catch();
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Card
          style={{
            marginTop: "50px",
            display: "flex",
            width: "600px",
            backgroundColor: "gray"
          }}
        >
          <div>
            <CardActionArea>
              <img
                style={{ borderRadius: "20px", margin: "20px", width: "200px" }}
                src={user.avatar_url}
                alt="User Avatar"
              />
            </CardActionArea>
          </div>
          <div
            style={{
              borderRadius: "20px",
              backgroundColor: "white",
              margin: "20px",
              width: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <p>
              <b>Nickname:</b> {user.login}
            </p>
            <p>
              <b>Type:</b> {user.type}
            </p>

            <br></br>
            <Link to="/list">
              <Button
                style={{ width: "100px", heigh: "10px" }}
                variant="contained"
                onClick={() => callFollowers()}
              >
                <p>Followers</p>
              </Button>
            </Link>
          </div>
        </Card>
      </div>
      <div style={{ marginTop: "20px" }}>
        <a href={user.html_url} target="_blank" alt="">
          <Button> Open profile in GitHub </Button>
        </a>
      </div>
    </div>
  );
};
