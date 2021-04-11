import React, { useState } from "react";
import Search from "./Search";
import Recipes from "./Recipes";
import Slider from "./Slider";
import "./modal.css";
import ModalW from "./ModalW";

function Main(props) {
  const [modalActive, setModalActive] = useState(true);
  return (
    <div className="Main">
      <ModalW active={modalActive} setActive={setModalActive}/>
      <Slider />
      <Search setModalActive={setModalActive} />
      <Recipes />
    </div>
  );
}

export default Main;
