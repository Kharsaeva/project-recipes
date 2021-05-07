import React, { useEffect } from 'react';
import { FiBookmark, FaUserCircle, FiArrowRightCircle } from 'react-icons/all';
import { Link, useHistory } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutStart } from '../redux/reducers/auth';
import { loadCategories } from '../redux/reducers/categories';
import { useAuth } from '../hooks/useAuth';

function Header() {
  const dispatch = useDispatch();

  const history = useHistory();

  const isAuth = useAuth();

  const categories = useSelector((state) => state.categories.items);

  const handleClick = (id) => {
    if (!id) {
      history.push('/categories');
    } else {
      history.push(`/categories/${id}`);
    }
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

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
              <li className="dropdown-button">
                <div>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="default"
                      className="dropdown-basic nav-items"
                    >
                      Категории рецептов
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {categories.map((category) => {
                        return (
                          <div key={category.id}>
                            <Dropdown.Item
                              onClick={() => handleClick(category.id)}
                            >
                              {category.name}
                            </Dropdown.Item>
                          </div>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </li>
              <li>
                <div className="nav-items about-us">О нас</div>
              </li>
              <li>
                <div className="nav-items about-us">Контакты</div>
              </li>
              <li className="fi-items">
                <Link to="/Bookmark">
                  <FiBookmark size={25} />
                </Link>
              </li>
              <li className="fi-items">
                {!isAuth && (
                  <Link to="/signIn">
                    <FaUserCircle size={25} />
                  </Link>
                )}
              </li>
              <li className="nav-items about-us">
                {isAuth && <Link to="/admin">Добавить рецепт</Link>}
              </li>
              {isAuth && (
                <li className="fi-items">
                  <Link to="/">
                    <FiArrowRightCircle size={25} onClick={logout} />
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
