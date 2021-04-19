import React from "react";
import Search from "./Search";
import Slider from "./Slider";
import "./modal.css";

function Main(props) {
  return (
    <div className="Main">
      <Slider />
      <Search />
    </div>
  );
}

export default Main;
