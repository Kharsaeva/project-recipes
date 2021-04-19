import React from "react";
import { useSelector } from "react-redux";
import RecipesItem from "./RecipesItem";

function Recipes(props) {
  const loading = useSelector((state) => state.recipes.loading);

  const filter = useSelector((state) => state.recipes.filter);

  const recipes = useSelector((state) => state.recipes.items);

  const filteredRecipes = recipes.filter(
    (item) => item.title.toLowerCase().indexOf(filter) > -1
  );

  if (loading) {
    return <p className="load-text">loading recipes...</p>;
  }

  return (
    <div
      style={{ width: "58%" }}
      className="Recipes justify-content-center m-auto"
    >
      {filteredRecipes.map((item) => {
        return <RecipesItem item={item} key={item.id} />;
      })}

      {/*<div className="recipes-block">*/}
      {/*  <div className="d-inline-flex">*/}
      {/*    <div className="img mb-3">*/}
      {/*      <img width={286} height={180} src={props.item.url} alt="img" />*/}
      {/*    </div>*/}
      {/*    <div className="d-block p-3 align-self-center">*/}
      {/*      <h4>{props.item.title}</h4>*/}
      {/*      <div className="d-inline d-flex">*/}
      {/*        <div>{props.item.calories}</div>*/}
      {/*        <div*/}
      {/*          style={{ borderRight: "1px solid darkgrey" }}*/}
      {/*          className="ml-4 mr-4"*/}
      {/*        >*/}
      {/*          {" "}*/}
      {/*        </div>*/}
      {/*        <div>{props.item.time}</div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div style={{ borderTop: "1px solid darkgrey" }} className="pb-3">*/}
      {/*    {" "}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}
export default Recipes;
