import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilteredRecipes from './FilteredRecipes';
import { loadRecipes } from '../../redux/reducers/recipes';
import RecipePresentation from './RecipePresentation';

function MainRecipes() {
  const dispatch = useDispatch();

  const recipes = useSelector((state) => state.recipes.items);
  const filter = useSelector((state) => state.recipes.filter);

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  const filteredRecipes = recipes.filter(
    (item) => item.title.toLowerCase().indexOf(filter) !== -1,
  );

  return (
    <div className=" justify-content-center m-auto w-75">
      {filter && (
        <div>
          {filteredRecipes.map((recipe) => {
            return <FilteredRecipes recipe={recipe} key={recipe.id} />;
          })}
        </div>
      )}
      <RecipePresentation />
    </div>
  );
}

export default MainRecipes;
