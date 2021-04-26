import React from 'react';
import { FiBookmark, FaUserCircle, FiArrowRightCircle } from 'react-icons/all';
import { Link, useHistory } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutStart } from '../redux/recipes';

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.token);
  const handleClick = () => {
    history.push('/categories/all-recipes');
  };

  const handleClick2 = () => {
    history.push('/categories/meat');
  };

  const handleClick3 = () => {
    history.push('/categories/desserts');
  };

  const handleClick4 = () => {
    history.push('/categories/beverages');
  };

  const handleClick5 = () => {
    history.push('/categories/salads');
  };

  const logout = () => {
    dispatch(logoutStart());
  };

  return (
    <div className="header">
      <div className="container-lg">
        <div className="row justify-content-between">
          <div className="col-3">
            <div className="logo">
              <Link to="/">
                <img
                  src="https://im0-tub-ru.yandex.net/i?id=77b7ea8c917a0bde08b581414328f261&n=13"
                  alt="logo"
                  className="logo-img"
                />
              </Link>
            </div>
          </div>
          <div className="col-9">
            <ul className="nav d-flex justify-content-between">
              <li className="nav-item dropdown-button">
                <div>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="default"
                      className="dropdown-basic"
                    >
                      Категории рецептов
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={handleClick}>
                        Все рецепты
                      </Dropdown.Item>
                      <Dropdown.Item onClick={handleClick2}>
                        Мясные
                      </Dropdown.Item>
                      <Dropdown.Item onClick={handleClick3}>
                        Десерты
                      </Dropdown.Item>
                      <Dropdown.Item onClick={handleClick4}>
                        Напитки
                      </Dropdown.Item>
                      <Dropdown.Item onClick={handleClick5}>
                        Салаты
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </li>
              <li className="nav-item">
                <div className="about-us">О нас</div>
              </li>
              <li className="nav-item">
                <div className="about-us">Контакты</div>
              </li>
              <li className="nav-item">
                <Link to="/Bookmark">
                  <FiBookmark size={25} style={{ marginTop: 22 }} />
                </Link>
              </li>
              <li className="nav-item">
                {token ? (
                  false
                ) : (
                  <Link to="/signIn">
                    <FaUserCircle size={25} style={{ marginTop: 22 }} />
                  </Link>
                )}
              </li>
              {token && (
                <li className="nav-item">
                  <Link to="/">
                    <FiArrowRightCircle
                      size={25}
                      style={{ marginTop: 22, position: 'absolute', right: 40 }}
                      onClick={logout}
                    />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
