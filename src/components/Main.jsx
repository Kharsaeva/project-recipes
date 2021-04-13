import React, { useState } from "react";
import Search from "./Search";
import Recipes from "./Recipes";
import Slider from "./Slider";
import "./modal.css";
import ModalW from "./ModalW";
import { useSelector } from "react-redux";

function Main(props) {
  const [modalActive, setModalActive] = useState(false);
  const recipes = useSelector((state) => state.recipes.items);

  return (
    <div className="Main">
      
      <Slider />
      <Search setModalActive={setModalActive} modalActive={modalActive}/>
      {recipes.map((item) => {
        return <Recipes item={item}/>
      })}
      
    </div>
  );
}

export default Main;
