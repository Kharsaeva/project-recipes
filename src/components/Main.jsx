import React from "react";
import Search from "./Search";
import Recipes from "./Recipes";
import Slider from './Slider';
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
