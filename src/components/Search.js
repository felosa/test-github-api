import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

const Search = ({ changeSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = event => {
    setSearch(event.target.value);
  };
  const handleForSubmit = event => {
    changeSearch(search);
  };
  return (
    <div style={{ marginTop: "10%" }}>
      <p
        style={{
          color: "#3a3a3a",
          fontSize: "25px",
          textDecoration: "underline",
          textDecorationColor: "#74d14c"
        }}
      >
        <b>Who's on GitHub?</b>
      </p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "350px" }}
        >
          <TextField
            label="GitHub Username"
            variant="outlined"
            type="text"
            // value={search}
            name="search"
            onChange={e => handleChange(e)}
          />

          <Link to="/list" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{ marginTop: "20px" }}
              onClick={e => handleForSubmit(e)}
            >
              Search
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
