import React, { useState } from "react";

function ModalW(props) {
  const [commit, setCommit] = useState("");
  const [initComm, setInitComm] = useState([
    { commentText: "Очень вкусно, всем советую 😋😋" },
  ]);

  const handleChangeComm = (e) => {
    setCommit(e.target.value);
  };

  const handleAddComm = () => {
    setInitComm([...initComm, { commentText: commit }]);
    setCommit("");
  };

  return (
    <div
      className={props.active ? "modal__modal active" : "modal__modal"}
      onClick={() => props.setActive(false)}
    >
      <div
        className={props.active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="head">
          <div className="nameComm">{props.item.title}</div>
          <div className="comments"><i>{props.item.comments}</i></div>
          {initComm.map((comm) => {
            return <div><i>{comm.commentText}</i></div>;
          })}
          <div className="rod">
            <input
              type="commit"
              value={commit}
              placeholder="Ваш комментарий"
              className="input-group-text inputComm"
              onChange={handleChangeComm}
            />
            <button className="btnComm" onClick={handleAddComm}>
              отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalW;
