import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { loadRecipes } from '../../redux/reducers/recipes';

function Categories() {
  const recipes = useSelector((state) => state.recipes.items);

  const id = parseInt(useParams().id);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(loadRecipes(id));
    } else {
      dispatch(loadRecipes());
    }
  }, [dispatch, id]);

  return (
    <div>
      {recipes.map((item) => {
        return (
          <div
            style={{ width: '58%' }}
            className="recipes justify-content-center m-auto"
          >
            <div className="recipes-block">
              <Link to={`/categories/recipes/${item.id}/${item.title}`}>
                <div className="d-inline-flex">
                  <div className="img mb-3">
                    <img width={286} height={180} src={item.url} alt="img" />
                  </div>
                  <div className="d-block p-3 align-self-center">
                    <h4>{item.title}</h4>
                    <div className="d-inline d-flex">
                      <div>{item.calories}</div>
                      <div
                        style={{ borderRight: '1px solid darkgrey' }}
                        className="ml-4 mr-4"
                      >
                        {' '}
                      </div>
                      <div>{item.time}</div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ borderTop: '1px solid darkgrey' }}
                  className="pb-3"
                >
                  {' '}
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
