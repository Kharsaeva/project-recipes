import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainRecipesItem from './MainRecipesItem';
import { loadRecipes } from '../../redux/reducers/recipes';

function MainRecipes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  const recipes = useSelector((state) => state.recipes.items);
  const filter = useSelector((state) => state.recipes.filter);
  const filteredRecipes = recipes.filter(
    (item) => item.title.toLowerCase().indexOf(filter) > -1,
  );
  const frontSideRecipes = recipes.filter((recipe) => {
    return recipe.id === 5 || recipe.id === 20 || recipe.id === 11;
  });
  return (
    <div
      style={{ width: '65%' }}
      className="recipes justify-content-center m-auto"
    >
      {filter ? (
        <div>
          {filteredRecipes.map((item) => {
            return <MainRecipesItem item={item} key={item.id} />;
          })}
        </div>
      ) : (
        false
      )}
      <div className="blockMain">
        Рецепты на каждый день: вкусно, быстро и легко
      </div>
      <div>
        {frontSideRecipes.map((item) => {
          return <MainRecipesItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default MainRecipes;
