import React from "react";
import Nav from "./Nav";
import Categories from "./Categories";

function Main(props) {
  return (
    <div className={"main"}>
      <Nav />
      <Categories />
    </div>
  );
}

export default Main;
