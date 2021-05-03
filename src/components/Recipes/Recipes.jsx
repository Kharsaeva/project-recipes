import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecipesItem from './RecipesItem';
import { Redirect, useParams } from 'react-router-dom';
import { loadRecipesItem } from '../../redux/reducers/recipesitem';

function Recipes() {
  const id = parseInt(useParams().id);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(loadRecipesItem(id));
    } else {
      <Redirect to="/" />;
    }
  }, [dispatch, id]);
  const recipes = useSelector((state) => state.recipesitem.items);

  return (
    <div
      style={{ width: '58%' }}
      className="recipes justify-content-center m-auto"
    >
      <RecipesItem item={recipes} key={recipes.id} />;
    </div>
  );
}
export default Recipes;
