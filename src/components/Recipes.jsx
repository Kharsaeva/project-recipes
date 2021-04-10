import React from "react";
import { useSelector } from "react-redux";

function Recipes(props) {
  const recipes = useSelector((state) => state.recipes.items);
  const loading = useSelector((state) => state.recipes.loading);

  if (loading) {
    return <p className="load-text">loading recipes...</p>;
  }

  return (
    <div
      style={{ width: "60%" }}
      className="Recipes justify-content-center m-auto"
    >
      {recipes.map((item) => {
        return (
          <div className="recipes-block">
            <div className="d-inline-flex">
              <div className="img mb-3">
                <img width={286} height={180} src={item.url} alt="img" />
              </div>
              <div className="d-block p-3 align-self-center">
                <h4>{item.title}</h4>
                <div className="d-inline d-flex">
                  <div>{item.calories}</div>
                  <div
                    style={{ borderRight: "1px solid darkgrey" }}
                    className="ml-4 mr-4"
                  >
                    {" "}
                  </div>
                  <div>{item.time}</div>
                </div>
              </div>
            </div>
            <div style={{ borderTop: "1px solid darkgrey" }} className="pb-3">
              {" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Recipes;
