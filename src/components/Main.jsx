import React from "react";
import Slider from "./Slider";

function Main() {
  return (
    <div className="main">
      <div className="container">
        <Slider />
        <div className="poisk">Поиск рецептов</div>
        <div className="row">
          <div className="col-12">
            <input
              type="text"
              placeholder="Введите текст..."
              className="typeT"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="karta">
              <div className="eat">
                <img
                  src="https://mnogoigr96.ru/800/600/https/gruziapro.ru/wp-content/uploads/2018/10/1-15.jpg"
                  alt="eat"
                  className="eatImg"
                />
              </div>
              <div className="opis">
                <div className="name">Хинкали по Аварски</div>
                <div className="description">
                  Аварский хинкал - это традиционное вкусное сытное блюдо
                  кавказской кухни. Не путайте его с грузинским хинкали!
                  Аварский хинкал - это пышное тесто, острый соус, отварное мясо
                  и бульон. Попробуйте!
                </div>
                <div className="calories">
                  <span className="bold">Калории:</span>Хинкали (1 штука)
                  содержит 192 калорий.
                </div>
                <div className="calories">
                  <span className="bold">Время приготовления:</span>30 мин.
                </div>
              </div>
            </div>
            <div className="karta">
              <div className="eat">
                <img
                  src="https://mnogoigr96.ru/800/600/https/gruziapro.ru/wp-content/uploads/2018/10/1-15.jpg"
                  alt="eat"
                  className="eatImg"
                />
              </div>
              <div className="opis">
                <div className="name">Хинкали по Аварски</div>
                <div className="description">
                  Аварский хинкал - это традиционное вкусное сытное блюдо
                  кавказской кухни. Не путайте его с грузинским хинкали!
                  Аварский хинкал - это пышное тесто, острый соус, отварное мясо
                  и бульон. Попробуйте!
                </div>
                <div className="calories">
                  <span className="bold">Калории:</span>Хинкали (1 штука)
                  содержит 192 калорий.
                </div>
                <div className="calories">
                  <span className="bold">Время приготовления:</span>30 мин.
                </div>
              </div>
            </div>
            <div className="karta">
              <div className="eat">
                <img
                  src="https://mnogoigr96.ru/800/600/https/gruziapro.ru/wp-content/uploads/2018/10/1-15.jpg"
                  alt="eat"
                  className="eatImg"
                />
              </div>
              <div className="opis">
                <div className="name">Хинкали по Аварски</div>
                <div className="description">
                  Аварский хинкал - это традиционное вкусное сытное блюдо
                  кавказской кухни. Не путайте его с грузинским хинкали!
                  Аварский хинкал - это пышное тесто, острый соус, отварное мясо
                  и бульон. Попробуйте!
                </div>
                <div className="calories">
                  <span className="bold">Калории:</span>Хинкали (1 штука)
                  содержит 192 калорий.
                </div>
                <div className="calories">
                  <span className="bold">Время приготовления:</span>30 мин.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
