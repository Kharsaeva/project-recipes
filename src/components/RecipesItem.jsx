import { useDispatch } from "react-redux";
import { itemDelete } from "../redux/reducers/recipes";
import React, { useState } from "react";
import { FiThumbsUp, FiBookmark, FiMessageCircle } from "react-icons/fi";
import { favoritePatch } from "../redux/reducers/recipes";
import ModalW from "./ModalW";
import { IoAlarm, IoFastFood } from "react-icons/all";

function RecipesItem(props) {
  const dispatch = useDispatch();

  const itemDeleting = (id) => {
    dispatch(itemDelete(id));
  };

  const [modalActive, setModalActive] = useState(false);

  const commOpen = () => {
    setModalActive(true);
  };

  const setFavorite = (id, favorite) => {
    dispatch(favoritePatch(id, favorite));
  };

  const [likeClick, setLikeClick] = useState(props.item.like);
  const [likeStatus, setLikeStatus] = useState(false);
  const likeActive = () => {
    if (likeStatus === false) {
      setLikeStatus(!likeStatus);
      setLikeClick(likeClick + 1);
    }
  };

  return (
    <div className="recipes-item m-auto d-block">
      <div>
        <div className="d-inline d-flex pb-4 justify-content-between">
          <img
            className="mr-4"
            src={props.item.url}
            style={{ width: "50%" }}
            alt="img"
          />
          <h3 className="align-self-center">{props.item.title}</h3>
          <button className="exit" onClick={() => itemDeleting(props.item.id)}>
            ❌
          </button>
        </div>
        <div className="d-block align-self-center pb-4">
          <IoFastFood />
          <span className="mr-5"> : {props.item.calories}</span>
          <IoAlarm />
          <span> : {props.item.time}</span>
        </div>
      </div>

      <div className={``}>
        <div className="pb-4">
          <h5>Ингредиенты:</h5>
          <div>{props.item.ingredients}</div>
        </div>
        <div className="cooking-method">
          <h5>Способ приготовления:</h5>
          <div>{props.item.cooking}</div>
        </div>
        <div className="d-inline d-flex w-auto p-4">
          <div className="LikeOne">
            <FiThumbsUp
              size={25}
              fill={likeStatus ? "black" : "none"}
              onClick={() => likeActive()}
            />{" "}
            {likeClick}
          </div>
          <div
            style={{ borderRight: "1px solid darkgrey" }}
            className="ml-4 mr-4"
          >
            {" "}
          </div>
          <div>
            <FiBookmark
              size={25}
              fill={props.item.favorite ? "black" : "none"}
              onClick={() => setFavorite(props.item.id, props.item.favorite)}
            />
          </div>
          <div
            style={{ borderRight: "1px solid darkgrey" }}
            className="ml-4 mr-4"
          >
            {" "}
          </div>
          <div className="LikeOne" onClick={() => commOpen()}>
            <FiMessageCircle size={25} />
          </div>
        </div>

        <ModalW
          active={modalActive}
          setActive={setModalActive}
          item={props.item}
        />
      </div>

      <div style={{ borderTop: "1px solid darkgrey" }} className="pb-4">
        {" "}
      </div>
    </div>
  );
}

export default RecipesItem;
