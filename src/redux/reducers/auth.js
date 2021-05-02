const AUTH_STARTED = 'auth/started';
const AUTH_FAILED = 'auth/failed';
const AUTH_SUCCEED = 'auth/succeed';
const AUTH_LOGOUT = 'auth/logout';

const initialState = {
  token: localStorage.getItem('auth-token'),
  authorizing: false,
  error: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_STARTED:
      return {
        ...state,
        authorizing: true,
        error: false,
      };

    case AUTH_SUCCEED:
      return {
        ...state,
        authorizing: false,
        token: action.payload.token,
      };

    case AUTH_FAILED:
      return {
        ...state,
        authorizing: false,
        error: true,
      };

    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
      };

    default:
      return state;
  }
}

export const loginStart = (login, password) => (dispatch) => {
  dispatch({ type: AUTH_STARTED });

  fetch(`http://localhost:3010/admin/?login=${login}&password=${password}`)
    .then((response) => response.json())
    .then((json) => {
      if (json.login === login && json.password === password) {
        localStorage.setItem('auth-token', json.token);
        dispatch({
          type: AUTH_SUCCEED,
          payload: json,
        });
      } else {
        dispatch({
          type: AUTH_FAILED,
          payload: json,
        });
      }
    });
};

export const logoutStart = () => {
  localStorage.removeItem('auth-token');

  return {
    type: AUTH_LOGOUT,
  };
};
