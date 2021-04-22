import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart } from "../redux/reducers/recipes";
import { Link } from "react-router-dom";

function SignIn(props) {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const handleClick = () => {
    dispatch(loginStart(login, pass));
  };

  const error = useSelector((state) => state.recipes.error);
  const authorizing = useSelector((state) => state.recipes.authorizing);

  return (
    <div>
      <div className="container h-100">
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="col-5 shadow px-5 py-3 rounded">
            <Link exact to="/">
              <div className="form-group text-right">❌</div>
            </Link>
            <h2 className="text-center pb-3">Авторизация</h2>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Введите логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Введите пороль"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            {error && (
              <div className="form-group text-danger small">
                Неверный логин или пороль
              </div>
            )}
            <div className="form-group text-center">
              <button
                className="btn btn-primary px-4"
                onClick={handleClick}
                disabled={authorizing}
              >
                Войти
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
