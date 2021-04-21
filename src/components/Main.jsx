import React from "react";
import Search from "./Search";
import Slider from "./Slider";
import "./modal.css";
import MainRecipes from "./MainRecipes";

function Main(props) {
  return (
    <div className="main">
      <Slider />
      <Search />
      <MainRecipes />
    </div>
  );
}

export default Main;
