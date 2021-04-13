import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalW from "./ModalW";

function Recipes(props) {
  const loading = useSelector((state) => state.recipes.loading);
  const [modalActive, setModalActive] = useState(false);
  if (loading) {
    return <p className="load-text">loading recipes...</p>;
  }

  return (
    <div
      style={{ width: "60%" }}
      className="Recipes justify-content-center m-auto"
    >
      <div className="recipes-block">
            <div className="d-inline-flex">
              <div className="img mb-3">
                <img width={286} height={180} src={props.item.url} alt="img" />
              </div>
              <div className="d-block p-3 align-self-center">
                <h4>{props.item.title}</h4>
                <div className="d-inline d-flex">
                  <div>{props.item.calories}</div>
                  <div
                    style={{ borderRight: "1px solid darkgrey" }}
                    className="ml-4 mr-4"
                  >
                    {" "}
                  </div>
                  <div>{props.item.time}</div>
                </div>
              </div>
            </div>
            <div style={{ borderTop: "1px solid darkgrey" }} className="pb-3">
              {" "}
            </div>
          </div>
          <ModalW active={modalActive} setActive={setModalActive} itema={props.item.comments}/>
    </div>
  );
}
export default Recipes;
