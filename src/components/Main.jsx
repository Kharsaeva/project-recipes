import React from 'react';
import Search from './Search';
import Slider from './Slider';
import './Modal/modal.css';
import MainRecipes from './Recipes/MainRecipes';

function Main() {
  return (
    <div className="main">
      <Slider />
      <Search />
      <MainRecipes />
    </div>
  );
}

export default Main;
