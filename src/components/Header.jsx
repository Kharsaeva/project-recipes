import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="logo">
              <img
                src="https://im0-tub-ru.yandex.net/i?id=77b7ea8c917a0bde08b581414328f261&n=13"
                alt="Logo"
                className="logoImg"
              />
            </div>
          </div>
          <div className="col">
            <div className="kategori">Котегории</div>
          </div>
          <div className="col-1">
            <div className="oNas">О нас</div>
          </div>
          <div className="col-1">
            <div className="oNas">Контакты</div>
          </div>
          <div className="col-2">
            <div className="bookmark">
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/786/786251.svg?token=exp=1617880331~hmac=634d832f199bd07d4d1e3fb4ced98b75"
                alt="bookmarkImg"
              />
              <div className="schetchick">1</div>
            </div>
          </div>
          <div className="col-1">
            <button className="Login">Войти</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
