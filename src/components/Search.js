import React, { useState } from "react";

const Search = ({ changeSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = event => {
    setSearch(event.target.value);
  };
  const handleForSubmit = event => {
    console.log(search);
    // changeSearch(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        // value={search}
        name="search"
        onChange={e => handleChange(e)}
      />
      <button onClick={e => handleForSubmit(e)}>Search</button>
    </div>
  );
};

export default Search;
