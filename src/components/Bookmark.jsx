import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

function Bookmark() {
  const recipes = useSelector((state) => state.recipes.items);

  const newRecipes = recipes.filter((item) => item.favorite === true);

  return (
    <div className="mb-5">
      {newRecipes.map((item) => {
        return (
          <div className="recipes justify-content-center m-auto">
            <div className="recipes-block">
              <Link to={`/recipes/${item.id}`}>
                <div className="d-inline-flex">
                  <div className="img mb-3">
                    <img width={286} height={180} src={item.url} alt="img" />
                  </div>
                  <div className="d-block p-3 align-self-center">
                    <h4>{item.title}</h4>
                    <div className="d-inline d-flex">
                      <div>{item.calories}</div>
                      <div className="line-icons ml-4 mr-4"> </div>
                      <div>{item.time}</div>
                    </div>
                  </div>
                </div>
                <div className="line pb-3"> </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Bookmark;
