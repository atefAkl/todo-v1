import React from "react";
import logo from "../todo.png";

const Brand = () => {
  return (
    <div className="brand">
      <img src={logo} alt="the logo" />
      <span>ToDooo</span>
    </div>
  );
};

export default Brand;
