import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecipesItem from './RecipesItem';
import { Redirect, useParams } from 'react-router-dom';
import { loadRecipesItem } from '../../redux/reducers/recipesItem';

function Recipes() {
  const id = parseInt(useParams().id);

  const dispatch = useDispatch();

  const recipe = useSelector((state) => state.recipesItem.items);

  useEffect(() => {
    if (id) {
      dispatch(loadRecipesItem(id));
    } else {
      return <Redirect to="/recipes/:id?" />;
    }
  }, [dispatch, id]);

  return (
    <div className="recipes justify-content-center m-auto">
      <RecipesItem recipe={recipe} key={recipe.id} />;
    </div>
  );
}
export default Recipes;
