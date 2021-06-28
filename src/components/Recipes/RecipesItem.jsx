import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FiThumbsUp, FiBookmark, FiMessageCircle } from 'react-icons/fi';
import ModalW from '../Modal';
import { favoritePatch } from '../../redux/reducers/bookmarks';

function RecipesItem(props) {
  const dispatch = useDispatch();

  const [modalActive, setModalActive] = useState(false);
  const [likeClick, setLikeClick] = useState(props.recipe.like);
  const [likeStatus, setLikeStatus] = useState(false);

  const commOpen = () => {
    setModalActive(true);
  };

  const setFavorite = (id, favorite) => {
    dispatch(favoritePatch(id, favorite));
  };

  const likeActive = () => {
    setLikeStatus(!likeStatus);
    if (likeStatus === false) {
      setLikeClick(likeClick + 1);
    } else setLikeClick(likeClick - 1);
  };

  return (
    <div className="w-75 m-auto d-block">
      <div className="pb-4">
        <div className="d-inline d-flex pb-4 justify-content-between">
          <img className="img mr-4" src={props.recipe.url} alt="img" />
          <h2 className="align-self-center">{props.recipe.title}</h2>
        </div>
        <div className="d-block align-self-center pb-4">
          <span className="mr-5">Калорийность: {props.recipe.calories}</span>
          <span>Время приготовления: {props.recipe.time}</span>
        </div>
        <h5>Ингредиенты:</h5>
        <span>{props.recipe.ingredients}</span>
      </div>
      <div className="cooking-method">
        <h5>Способ приготовления:</h5>
        <div>{props.recipe.cooking}</div>
      </div>
      <div className="d-inline d-flex w-auto p-4">
        <div>
          <FiThumbsUp
            className="like-one"
            size={25}
            fill={likeStatus ? 'black' : 'none'}
            onClick={() => likeActive()}
          />{' '}
          {likeClick}
        </div>
        <div className="line-icons ml-4 mr-4"> </div>
        <div>
          <FiBookmark
            className="bookmark"
            size={25}
            fill={props.recipe.favorite ? 'black' : 'none'}
            onClick={() => setFavorite(props.recipe.id, props.recipe.favorite)}
          />
        </div>
        <div className="line-icons ml-4 mr-4"> </div>
        <div className="like-one" onClick={() => commOpen()}>
          <FiMessageCircle size={25} />
        </div>
      </div>
      <div className="line pb-4"> </div>
      <ModalW
        active={modalActive}
        setActive={setModalActive}
        recipe={props.recipe}
      />
    </div>
  );
}

export default RecipesItem;
