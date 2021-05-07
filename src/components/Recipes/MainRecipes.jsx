import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainRecipesItem from './MainRecipesItem';
import { loadRecipes } from '../../redux/reducers/recipes';
import RecipePresentation from './RecipePresentation';

function MainRecipes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  const recipes = useSelector((state) => state.recipes.items);

  const filter = useSelector((state) => state.recipes.filter);

  const filteredRecipes = recipes.filter(
    (item) => item.title.toLowerCase().indexOf(filter) !== -1,
  );

  return (
    <div className="recipes justify-content-center m-auto">
      {filter && (
        <div>
          {filteredRecipes.map((recipe) => {
            return <MainRecipesItem recipe={recipe} key={recipe.id} />;
          })}
        </div>
      )}
      <RecipePresentation />
    </div>
  );
}

export default MainRecipes;
