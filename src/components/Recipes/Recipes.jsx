import React from 'react';
import { useSelector } from 'react-redux';
import RecipesItem from './RecipesItem';
import { useParams } from 'react-router-dom';

function Recipes(props) {
  const loading = useSelector((state) => state.recipes.loading);
  const recipes = useSelector((state) => state.recipes.items);
  const id = parseInt(useParams().id);
  const newRecipes = recipes.filter((recipe) => id === recipe.id);

  if (loading) {
    return <p className="load-text">loading recipes...</p>;
  }

  return (
    <div
      style={{ width: '58%' }}
      className="recipes justify-content-center m-auto"
    >
      {newRecipes.map((item) => {
        return <RecipesItem item={item} key={item.id} />;
      })}
    </div>
  );
}
export default Recipes;
