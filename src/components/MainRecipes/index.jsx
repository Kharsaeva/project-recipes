import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilteredRecipes from './FilteredRecipes';
import { loadRecipes } from '../../redux/reducers/recipes';
import RecipePresentation from './RecipePresentation';

function MainRecipes() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.recipes.filter);

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  const recipes = useSelector((state) => {
    return state.recipes.items.filter((recipe) => {
      return recipe.title.toLowerCase().indexOf(filter) !== -1;
    });
  });

  return (
    <div className=" justify-content-center m-auto w-75">
      {filter && (
        <div>
          {recipes.map((recipe) => {
            return <FilteredRecipes recipe={recipe} key={recipe.id} />;
          })}
        </div>
      )}
      <RecipePresentation />
    </div>
  );
}

export default MainRecipes;
