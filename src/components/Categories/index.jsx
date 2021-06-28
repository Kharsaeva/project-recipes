import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { recipeDelete, loadRecipes } from '../../redux/reducers/recipes';
import { useAuth } from '../../hooks/useAuth';

function Categories() {
  const id = parseInt(useParams().id);

  const dispatch = useDispatch();

  const itemDeleting = (id) => {
    dispatch(recipeDelete(id));
  };

  useEffect(() => {
    if (id) {
      dispatch(loadRecipes(id));
    } else {
      dispatch(loadRecipes());
    }
  }, [dispatch, id]);

  const isAuth = useAuth();

  const recipes = useSelector((state) => state.recipes.items);

  return (
    <div className="categories m-auto w-75">
      {recipes.map((recipe) => {
        return (
          <div className="category" key={recipe.id}>
            <div className="d-inline mt-3">
              {isAuth && (
                <button
                  className="exit"
                  onClick={() => itemDeleting(recipe.id)}
                >
                  ❌
                </button>
              )}
            </div>
            <div className="recipes-block">
              <Link to={`/recipes/${recipe.id}`}>
                <div className="d-inline-flex justify-content-between">
                  <div className="img">
                    <img width={300} height={200} src={recipe.url} alt="img" />
                  </div>
                  <div className="d-block p-3 align-self-center">
                    <h4>{recipe.title}</h4>
                    <div className="d-inline d-flex">
                      <div>{recipe.calories}</div>
                      <div className="line-icons ml-4 mr-4"> </div>
                      <div>{recipe.time}</div>
                    </div>
                  </div>
                </div>
                <div className="line pb-4">{''}</div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
