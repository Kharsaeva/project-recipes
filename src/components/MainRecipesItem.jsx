import React, { useState } from 'react';
import { favoritePatch } from '../redux/reducers/recipes';
import { FiBookmark, FiMessageCircle, FiThumbsUp } from 'react-icons/fi';
import ModalW from './ModalW';
import { useDispatch } from 'react-redux';

function MainRecipesItem(props) {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
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
      <div className="pb-4">
        <div className="d-inline d-flex pb-4 justify-content-between">
          <img
            className="mr-4"
            src={props.item.url}
            style={{ width: '50%' }}
            alt="img"
          />
          <h2 className="align-self-center">{props.item.title}</h2>
        </div>
        <div className="d-block align-self-center pb-4">
          <span className="mr-5">Каллорийность: {props.item.calories}</span>
          <span>Время приготовления: {props.item.time}</span>
        </div>
      </div>

      <div className="d-inline d-flex w-auto p-4">
        <div className="like-one">
          <FiThumbsUp
            size={25}
            fill={likeStatus ? 'black' : 'none'}
            onClick={() => likeActive()}
          />{' '}
          {likeClick}
        </div>
        <div
          style={{ borderRight: '1px solid darkgrey' }}
          className="ml-4 mr-4"
        >
          {' '}
        </div>
        <div>
          <FiBookmark
            className="like-one"
            size={25}
            fill={props.item.favorite ? 'black' : 'none'}
            onClick={() => setFavorite(props.item.id, props.item.favorite)}
          />
        </div>
        <div
          style={{ borderRight: '1px solid darkgrey' }}
          className="ml-4 mr-4"
        >
          {' '}
        </div>
        <div className="like-one" onClick={() => commOpen()}>
          <FiMessageCircle size={25} />
        </div>
      </div>
      <div style={{ borderTop: '1px solid darkgrey' }} className="pb-4">
        {' '}
      </div>
      <ModalW
        active={modalActive}
        setActive={setModalActive}
        item={props.item}
      />
    </div>
  );
}

export default MainRecipesItem;
