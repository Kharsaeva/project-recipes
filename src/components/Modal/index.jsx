import React, { useState } from 'react';
import './modal.css';

function Modal(props) {
  const [commit, setCommit] = useState('');

  const [initComm, setInitComm] = useState([
    { commentText: 'Очень вкусно, всем советую 😋😋' },
  ]);

  const handleChangeComm = (e) => {
    setCommit(e.target.value);
  };

  const handleAddComm = () => {
    setInitComm([...initComm, { commentText: commit }]);
    setCommit('');
  };

  return (
    <div
      className={props.active ? 'modal__modal active' : 'modal__modal'}
      onClick={() => props.setActive(false)}
    >
      <div
        className={props.active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="head">
          <div className="like-one">{props.recipe.title}</div>
          <div className="comments">
            <i>{props.recipe.comments}</i>
          </div>
          {initComm.map((comm, index) => {
            return (
              <div key={index}>
                <i>{comm.commentText}</i>
              </div>
            );
          })}
          <div className="rod">
            <input
              type="commit"
              value={commit}
              placeholder="Ваш комментарий"
              className="input-group-text input-comm"
              onChange={handleChangeComm}
            />
            <button className="btn-comm" onClick={handleAddComm}>
              отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
