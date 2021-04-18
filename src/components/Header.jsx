import React from "react";
import { FaUserCircle, FaBookmark } from "react-icons/all";

function Header() {
  return (
    <div className="header m-auto">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-4">
            <div className="logo">
              <img
                src="https://im0-tub-ru.yandex.net/i?id=77b7ea8c917a0bde08b581414328f261&n=13"
                alt="Logo"
                className="logoImg"
              />
            </div>
          </div>
          <div className="col-auto">
            <ul>
              <li>Категории</li>
              <li>О нас</li>
              <li>Контакты</li>
              <li>
                <FaBookmark />
              </li>
              <li>
                <FaUserCircle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
