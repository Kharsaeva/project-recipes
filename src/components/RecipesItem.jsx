import { useDispatch, useSelector } from 'react-redux'
import { itemDelete } from "../redux/reducers/recipes";
import React, { useState } from "react";
import { FiThumbsUp, FiBookmark, FiMessageCircle } from "react-icons/fi";
import { favoritePatch } from "../redux/reducers/recipes";
import ModalW from "./ModalW";

function RecipesItem() {
  const dispatch = useDispatch();
  const itemDeleting = (id) => {
    dispatch(itemDelete(id));
  };

  const recipes = useSelector((state) => state.recipes.items);
  const [modalActive, setModalActive] = useState(false);

  const commOpen = () => {
    setModalActive(true);
  };

  const setFavorite = (id, favorite) => {
    dispatch(favoritePatch(id, favorite));
  };

  const [likeClick, setLikeClick] = useState(recipes.map(recipe => recipe.like));
  const [likeStatus, setLikeStatus] = useState(false);
  const likeActive = () => {
    if (likeStatus === false) {
      setLikeStatus(!likeStatus);
      setLikeClick(likeClick + 1);
    }
  };

  return (
   recipes.map((recipe) => {
     return(
       <div className="RecipesItem m-auto d-block">
         <div className="pb-4">
           <div className="d-inline d-flex pb-4 justify-content-between">
             <img
               className="mr-4"
               src={recipe.url}
               style={{ width: "50%" }}
               alt="img"
             />
             <h2 className="align-self-center">{recipe.title}</h2>
             <button className="exit" onClick={() => itemDeleting(recipe.id)}>
               ❌
             </button>
           </div>
           <div className="d-block align-self-center pb-4">
             <span className="mr-5">Каллорийность: {recipe.calories}</span>
             <span>Время приготовления: {recipe.time}</span>
           </div>
           <h5>Ингредиенты:</h5>
           <span>{recipe.ingredients}</span>
         </div>
         <div className="cooking-method">
           <h5>Способ приготовления:</h5>
           <div>{recipe.cooking}</div>
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
               fill={recipe.favorite ? "black" : "none"}
               onClick={() => setFavorite(recipe.id, recipe.favorite)}
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
         <div style={{ borderTop: "1px solid darkgrey" }} className="pb-4">
           {" "}
         </div>
         <ModalW
           active={modalActive}
           setActive={setModalActive}
           item={recipe}
         />
       </div>
     )
   })
  );
}

export default RecipesItem;
