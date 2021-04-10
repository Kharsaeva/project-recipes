import React from "react";

function RecipesItem(props) {
  return (
    <div className="RecipesItem m-auto d-block">
      <div className="pb-4">
        <div className="d-inline d-flex pb-4">
          <img
            className="mr-4"
            src={props.item.url}
            style={{ width: "50%" }}
            alt="img"
          />
          <h2 className="align-self-center">{props.item.title}</h2>
        </div>
        <div className="d-block align-self-center pb-4">
          <span className="mr-5">Каллорийность: {props.item.calories}</span>
          <span>Время приготовления: {props.item.time}</span>
        </div>
        <h5>Ингредиенты:</h5>
        <span>{props.item.ingredients}</span>
      </div>
      <div className="cooking-method">
        <h5>Способ приготовления:</h5>
        <div>{props.item.cooking}</div>
      </div>
      <div className="d-inline d-flex w-auto p-4">
        <div>👍 {props.item.like}</div>
        <div
          style={{ borderRight: "1px solid darkgrey" }}
          className="ml-4 mr-4"
        >
          {" "}
        </div>
        <div>🛒{props.item.favorite}</div>
        <div
          style={{ borderRight: "1px solid darkgrey" }}
          className="ml-4 mr-4"
        >
          {" "}
        </div>
        <div>🔂</div>
      </div>
      <div style={{ borderTop: "1px solid darkgrey" }} className="pb-4">
        {" "}
      </div>
    </div>
  );
}

export default RecipesItem;
