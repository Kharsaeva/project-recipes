import React from 'react'
import { useSelector } from 'react-redux'
import MainRecipesItem from './MainRecipesItem'

function MainRecipes (props) {
  const recipes = useSelector((state) => state.recipes.items);
  const newrecipes =recipes.filter(recipe => {
    if (recipe.category==="напитки")
   {
      return true
    }
    return false
  })
  return (
  <div
    style={{ width: "58%" }}
    className="Recipes justify-content-center m-auto"
  >

    {newrecipes.map((item) => {
      return <MainRecipesItem item={item} key={item.id} />;
    })}

  </div>
);
}

export default MainRecipes