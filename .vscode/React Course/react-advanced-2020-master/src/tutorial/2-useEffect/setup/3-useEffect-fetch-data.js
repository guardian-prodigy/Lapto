import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, Setusers] = useState([]);
  const getUsers = async () => {
    let response = await fetch(url);
    let data = await response.json();
    Setusers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url: img, html_url } = user;
          return (
            <li key={id}>
              <img src={img} alt="" />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
