import React from "react";
import { FiBookmark } from 'react-icons/all'
import { Link,  useHistory } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'


function Header() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/allrecipes");

  }
  const handleClick2 = () => {
    history.push("/meat");
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
                       <Dropdown.Item>Tech I Like</Dropdown.Item>
                       <Dropdown.Item>About me</Dropdown.Item>
                     </Dropdown.Menu>
                  {/*<MenuItem onClick={handleClick}>Все рецепты</MenuItem>*/}
                  {/*<MenuItem>Мясные</MenuItem>*/}
                  {/*<MenuItem href="#">Tech I Like</MenuItem>*/}
                  {/*<MenuItem href="#">About me</MenuItem>*/}
                  {/*<MenuItem href="#addBlog">Add a Blog</MenuItem>*/}
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

// <select className="kategori">
//   <option>Кaтегории рецептов</option>
//   {/*<option >Все рецепты</option>*/}
//   {/*<option>Десерты</option>*/}
//   {/*<option>Мясные</option>*/}
//   {/*<option>Напитки</option>*/}
//   {/*<option>Супы</option>*/}
// </select>