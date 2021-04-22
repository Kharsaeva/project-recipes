import React from "react";
import { FiBookmark, FaUserCircle } from 'react-icons/all'
import { Link, Switch, useHistory } from 'react-router-dom'
import { Dropdown, NavLink } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'


function Header() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/allrecipes");

  }
  const handleClick2 = () => {
    history.push("/meat");
  }
  const handleClick3 = () => {
    history.push("/desserts");
  }
  const handleClick4 = () => {
    history.push("/beverages");
  }
  const handleClick5 = () => {
    history.push("/salads");
  }
  const token = useSelector((state) => state.recipes.token);
  let routes;

  if (token) {
    routes = <Redirect to="/" />;
  } else {
    routes = (
      <Switch>
        <Redirect to="/SignIn" />
      </Switch>
    );
  }

  return (
    <div className="header">
      <div className="container-lg">
        <div className="row  justify-content-between">
          <div className="col-3">
            <div className="logo">
              <Link to="/">
                <img
                  src="https://im0-tub-ru.yandex.net/i?id=77b7ea8c917a0bde08b581414328f261&n=13"
                  alt="Logo"
                  className="logoImg"
                />
              </Link>
            </div>
          </div>
          <div className="col-8">
            <ul className="nav d-flex justify-content-between">
              <li className="nav-item dropdownButton">
                <div >
                   <Dropdown>
                     <Dropdown.Toggle variant="default" className="dropdown-basic">
                       Категории рецептов
                     </Dropdown.Toggle>
                     <Dropdown.Menu>
                       <Dropdown.Item onClick={handleClick}>Все рецепты</Dropdown.Item>
                       <Dropdown.Item onClick={handleClick2}>Мясные</Dropdown.Item>
                       <Dropdown.Item onClick={handleClick3}>Десерты</Dropdown.Item>
                       <Dropdown.Item onClick={handleClick4}>Напитки</Dropdown.Item>
                       <Dropdown.Item onClick={handleClick5}>Салаты</Dropdown.Item>
                     </Dropdown.Menu>
                </Dropdown>
                </div>
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
                <Link to="/SignIn">
                  <FaUserCircle
                    size={25}
                    style={{marginTop:22}}
                    onClick={routes}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

