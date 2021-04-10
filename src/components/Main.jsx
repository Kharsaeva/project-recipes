import React from "react";
import Slider from "./Slider";
import Search from "./Search";
import Recipes from "./Recipes";

function Main(props) {
  return (
    <div className="Main">
      <Slider />
      <Search />
      <Recipes />
    </div>
  );
}

export default Main;
