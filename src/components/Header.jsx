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
                      {categories.map((categorie) => {
                        return (
                          <div key={categorie.id}>
                            <Dropdown.Item
                              onClick={() => handleClick(categorie.id)}
                            >
                              {categorie.name}
                            </Dropdown.Item>
                          </div>
                        );
                      })}
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
                  <FiBookmark
                    size={25}
                    style={{ marginTop: 22, marginLeft: 10 }}
                  />
                </Link>
              </li>
              <li className="nav-item">
                {isAuth ? (
                  false
                ) : (
                  <Link to="/signIn">
                    <FaUserCircle size={25} style={{ marginTop: 22 }} />
                  </Link>
                )}
              </li>
              <li className="nav-item about-us" style={{ marginRight: 40 }}>
                {isAuth && <Link to="/admin">Добавить рецепт +</Link>}
              </li>
              {isAuth && (
                <li className="nav-item">
                  <Link to="/">
                    <FiArrowRightCircle
                      size={25}
                      style={{ marginTop: 22, position: 'absolute', right: 30 }}
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
