import React from "react";
import { useSelector } from "react-redux";
import RecipesItem from "./RecipesItem";
import { Link, useParams } from 'react-router-dom'

function Recipes(props) {
  const loading = useSelector((state) => state.recipes.loading);

  // const filter = useSelector((state) => state.recipes.filter);

  const recipes = useSelector((state) => state.recipes.items);
  const id = parseInt(useParams().id)
  const newrecipes =recipes.filter(recipe => {
    if (id===recipe.id){
      return true
    }
    return false
  })
  // const filteredRecipes = recipes.filter(
  //   (item) => item.title.toLowerCase().indexOf(filter) > -1
  // );

  if (loading) {
    return <p className="load-text">loading recipes...</p>;
  }

  return (
    <div
      style={{ width: "58%" }}
      className="Recipes justify-content-center m-auto"
    >

        {newrecipes.map((item) => {
          return <RecipesItem item={item} key={item.id} />;
        })}




    </div>
  );
}
export default Recipes;
