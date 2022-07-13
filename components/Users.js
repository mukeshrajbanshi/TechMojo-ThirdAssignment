import React from "react";
import users from "../src/users.json";

function Users() {
  return (
    <>
      {users.map((index) => {
        return <li>{index.name.firstname + " " + index.name.lastname}</li>;
      })}
    </>
  );
}
export default Users;
