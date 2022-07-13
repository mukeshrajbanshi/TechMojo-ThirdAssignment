import React from "react";
import "./styles.css";
import Users from "../components/Users";
import Products from "../components/Products";
import User from "../components/User";

function App() {
  return (
    <div>
      <Users />
      <User />
      <Products />
    </div>
  );
}
export default App;
