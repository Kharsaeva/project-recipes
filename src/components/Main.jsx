import React from "react";
import Search from "./Search";
import Slider from "./Slider";
import "./modal.css";
import Recipes from "./Recipes";

function Main(props) {
  return (
    <div className="main">
      <Slider />
      <Search />
      <Recipes />
    </div>
  );
}

export default Main;
