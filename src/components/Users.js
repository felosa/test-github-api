import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export const Users = ({ user, users, setOneUser, changeSearch, search }) => {
  const passData = value => {
    setOneUser(value);
  };

  if (users) {
    return (
      <div>
        {user !== "" ? (
          <div>
            <Typography>{user.login} Followers:</Typography>
          </div>
        ) : (
          <></>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >
            {users.map((user, index) => {
              return (
                <div
                  style={{
                    padding: "15px",
                    maxWidth: "200px",
                    maxHeight: "400px"
                  }}
                >
                  <Card key={index}>
                    <CardActionArea>
                      <img
                        style={{ width: "200px" }}
                        src={user.avatar_url}
                        alt="User Avatar"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {user.login}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions style={{ justifyContent: "center" }}>
                      <Link to="/user">
                        <Button
                          size="small"
                          color="primary"
                          onClick={() => passData(user)}
                        >
                          More information
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
        {user !== "" ? (
          <div>
            <Link to="/user">
              <Button onClick={() => passData(user)}>
                <p>Back to {user.login} profile</p>
              </Button>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};
