import React, { useState, useEffect } from "react";
import axios from "axios";

export const Users = searchText => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // axios.get(`https://api.github.com/search/users?q=${searchText}+type:user+in:login`)
    axios
      .get(`https://api.github.com/search/users?q=felosa+type:user+in:login`)
      .then(res => {
        console.log(res.data.items);
        setUsers(res.data.items);
      })
      .catch();
  }, []);

  if (users) {
    return (
      <div>
        
        {users.map((user, index) => {
          console.log(users, "son los users");
          return (
            <div key={index}>
              <p>{user.login}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};
