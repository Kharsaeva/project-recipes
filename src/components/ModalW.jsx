import React from "react";

function ModalW(props) {
  return <div className={props.active ? "modal__modal active" : "modal__modal"} onClick={() => props.setActive(false)}>
    <div className={props.active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
      <div className="head">
        <div className="nameComm">Паша Васельцов:</div>
        <div className="comments">Очень вкусно, всем советую 😋😋</div>
        <div className="rod">
          <input type="text" className="input-group-text inputComm"/>
          <button className="btnComm">отправить</button>
        </div>
      </div>
    </div>
  </div>;
}

export default ModalW;
