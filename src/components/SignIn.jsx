import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { loginStart } from '../redux/reducers/auth';
import { useAuth } from '../hooks/useAuth';

function SignIn() {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const error = useSelector((state) => state.auth.error);
  const authorizing = useSelector((state) => state.auth.authorizing);

  const isAuth = useAuth();

  const handleClick = () => {
    dispatch(loginStart(login, pass));
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="container sign-in">
        <div className="row justify-content-center align-items-center">
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
                placeholder="Введите пароль"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            {error && (
              <div className="form-group text-danger small">
                Неверный логин или пароль
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
