import { useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import Recipes from './Recipes/Recipes';
import React from 'react';

function Bookmark() {
  const recipes = useSelector((state) => state.recipes.items);
  const newRecipes = recipes.filter((item) => item.favorite === true);

  return (
    <div className="mb-5">
      <div>
        <Route path="/categories/:category?/:id?/:title?">
          <Recipes />
        </Route>
      </div>
      {newRecipes.map((item) => {
        return (
          <div
            style={{ width: '58%' }}
            className="recipes justify-content-center m-auto"
          >
            <div className="recipes-block">
              <Route exact path="/:category?/:id?">
                <Link to={`/categories/all-recipes/${item.id}/${item.title}`}>
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
              </Route>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Bookmark;
