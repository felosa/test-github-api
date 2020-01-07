import React from "react";
import { Link } from "react-router-dom";
import logo from "./../pictures/githubber.png";
import home from "./../pictures/home.png";

export const NavBar = ({ removeUsers }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "gray"
      }}
    >
      <div>
        <img
          style={{
            maxWidth: "200px",
            maxHeight: "200px"
          }}
          src={logo}
          alt=""
        ></img>
      </div>
      <div>
        <Link to="/">
          <img
            style={{
              paddingRight: '30px',
              paddingTop: "30px",
              maxWidth: "35px",
              maxHeight: "35px"
            }}
            src={home}
            alt=""
            onClick={() => removeUsers()}
          ></img>
        </Link>
      </div>
    </div>
  );
};
