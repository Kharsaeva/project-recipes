import React from 'react';
import { useSelector } from 'react-redux';
import MainRecipesItem from './MainRecipesItem';

function MainRecipes(props) {
  const recipes = useSelector((state) => state.recipes.items);

  const filter = useSelector((state) => state.recipes.filter);

  const filteredRecipes = recipes.filter(
    (item) => item.title.toLowerCase().indexOf(filter) > -1,
  );

  return (
    <div
      style={{ width: '58%' }}
      className="recipes justify-content-center m-auto"
    >
      {filteredRecipes.map((item) => {
        return <MainRecipesItem item={item} key={item.id} />;
      })}
    </div>
  );
}

export default MainRecipes;
