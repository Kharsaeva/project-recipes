import React from 'react';
import FilteredRecipes from './FilteredRecipes';
import { useSelector } from 'react-redux';

function RecipePresentation() {
  const recipes = useSelector((state) => {
    return state.recipes.items.filter((recipe) => {
      return recipe.id === 5 || recipe.id === 20 || recipe.id === 11;
    });
  });

  return (
    <>
      <div className="block-main">
        Рецепты на каждый день: вкусно, быстро и легко
      </div>
      <div>
        {recipes.map((recipe) => {
          return <FilteredRecipes recipe={recipe} key={recipe.id} />;
        })}
      </div>
    </>
  );
}

export default RecipePresentation;
