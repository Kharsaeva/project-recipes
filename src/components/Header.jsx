import React from "react";
import { FiBookmark } from 'react-icons/all'

function Header() {
  return (
    <div className="header">
      <div className="container-lg">
        <div className="row  justify-content-between">
          <div className="col-3">
            <div className="logo">
              <img
                src="https://im0-tub-ru.yandex.net/i?id=77b7ea8c917a0bde08b581414328f261&n=13"
                alt="Logo"
                className="logoImg"
              />
            </div>
          </div>
          <div className="col-8">
            <ul className="nav d-flex justify-content-between">
              <li className="nav-item">
                <select className="kategori">
                  <option selected>Кaтегории рецептов</option>
                  <option>Все</option>
                  <option>Десерты</option>
                  <option>Мясные</option>
                  <option>Напитки</option>
                  <option>Супы</option>
                </select>
              </li>
              <li className="nav-item">
                <div className="oNas">О нас</div>
              </li>
              <li className="nav-item">
                <div className="oNas">Контакты</div>
              </li>
              <li className="nav-item">
                 <FiBookmark
                   size={25}
                   style={{marginTop:22}}

                 />
                  <div className="schetchick">1</div>
              </li>
              <li className="nav-item">
                <button className="Login">Войти</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
