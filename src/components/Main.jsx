import React from "react";
import Search from "./Search";
import Recipes from "./Recipes";
import Slider from "./Slider";
import "./modal.css";

import { useSelector } from "react-redux";

function Main(props) {
  const recipes = useSelector((state) => state.recipes.items);

  return (
    <div className="Main">
      <Slider />
      <Search />
      {recipes.map((item) => {
        return <Recipes item={item} />;
      })}
    </div>
  );
}

export default Main;
