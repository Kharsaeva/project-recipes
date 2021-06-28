import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

function Bookmark() {
  const recipes = useSelector((state) => {
    return state.recipes.items.filter((recipe) => {
      return recipe.favorite;
    });
  });

  return (
    <div className="mb-5">
      {recipes.map((recipe) => {
        return (
          <div className="justify-content-center m-auto w-75">
            <div>
              <Link to={`/recipes/${recipe.id}`}>
                <div className="d-inline-flex">
                  <div className="img mb-3">
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
