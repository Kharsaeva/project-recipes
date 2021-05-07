import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { itemDelete, loadRecipes } from '../../redux/reducers/recipes';
import { useAuth } from '../../hooks/useAuth';

function Categories() {
  const id = parseInt(useParams().id);

  const dispatch = useDispatch();

  const itemDeleting = (id) => {
    dispatch(itemDelete(id));
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
    <div className="categories m-auto">
      {recipes.map((recipes) => {
        return (
          <div className="category" key={recipes.id}>
            <div className="d-inline mt-3">
              {isAuth && (
                <button
                  className="exit"
                  onClick={() => itemDeleting(recipes.id)}
                >
                  ❌
                </button>
              )}
            </div>
            <div className="recipes-block">
              <Link to={`/recipes/${recipes.id}`}>
                <div className="d-inline-flex justify-content-between">
                  <div className="img">
                    <img width={286} height={180} src={recipes.url} alt="img" />
                  </div>
                  <div className="d-block p-3 align-self-center">
                    <h4>{recipes.title}</h4>
                    <div className="d-inline d-flex">
                      <div>{recipes.calories}</div>
                      <div className="line-icons ml-4 mr-4"> </div>
                      <div>{recipes.time}</div>
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
