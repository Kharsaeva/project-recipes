import React from 'react';
import { Link } from 'react-router-dom';

function FilteredRecipes(props) {
  return (
    <div className="m-auto d-block">
      <div className="pb-4 mt-4">
        <Link to={`/recipes/${props.recipe.id}`}>
          <div className="d-inline d-flex pb-4 ">
            <img className="img-main mr-4" src={props.recipe.url} alt="img" />
            <h2 className="align-self-center">{props.recipe.title}</h2>
          </div>
        </Link>
        <div className="d-block align-self-center pb-4">
          <span className="mr-5">Каллорийность: {props.recipe.calories}</span>
          <span>Время приготовления: {props.recipe.time}</span>
        </div>
      </div>
      <div className="line pb-4"> </div>
    </div>
  );
}

export default FilteredRecipes;
