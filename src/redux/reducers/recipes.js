const RECIPES_LOAD_START = "recipes/load/start";
const RECIPES_LOAD_SUCCESS = "recipes/load/success";
const FILTER_SET = "filter/set";
const DELETE_LOAD_START = "delete/load/start";
const DELETE_LOAD_SUCCESS = "delete/load/success";
const FAVORITE_SET_START = "favorite/set/start";
const FAVORITE_SET_SUCCESS = "favorite/set/success";
const AUTH_STARTED = "auth/started";
const AUTH_FAILED = "auth/failed";
const AUTH_SUCCEED = "auth/succeed";

const initialState = {
  items: [],
  filter: "",
  loading: false,
  likeState: false,
  //Админ понель авторизации
  token: "",
  authorizing: false,
  error: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case RECIPES_LOAD_START:
      return {
        ...state,
        loadingItems: true,
      };

    case RECIPES_LOAD_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loadingItems: false,
      };

    case FILTER_SET:
      return {
        ...state,
        filter: action.payload,
      };

    case DELETE_LOAD_START:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              deleting: true,
            };
          }
          return item;
        }),
      };

    case DELETE_LOAD_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => {
          return item.id !== action.payload;
        }),
      };

    case FAVORITE_SET_SUCCESS:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              favorite: !item.favorite,
            };
          }
          return item;
        }),
      };

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

    default:
      return state;
  }
}

export const setFilterText = (text) => {
  return {
    type: "filter/set",
    payload: text,
  };
};

export const loadRecipes = () => {
  return (dispatch) => {
    dispatch({ type: RECIPES_LOAD_START });

    fetch("http://localhost:3010/recipes")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: RECIPES_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
};

export function favoritePatch(id, favorite) {
  return (dispatch) => {
    dispatch({
      type: FAVORITE_SET_START,
    });
    fetch(`http://localhost:3010/recipes/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ favorite: !favorite }),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: FAVORITE_SET_SUCCESS,
          payload: id,
        });
      });
  };
}

export const itemDelete = (id) => {
  return function (dispatch) {
    dispatch({ type: DELETE_LOAD_START, payload: id });

    fetch("http://localhost:3010/recipes", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: DELETE_LOAD_SUCCESS,
          payload: id,
        });
      });
  };
};

export const loginStart = (login, password) => (dispatch) => {
  dispatch({ type: AUTH_STARTED });

  fetch("http://localhost:3010/admin")
    .then((response) => response.json())
    .then((json) => {
      const random = Math.random();

      if (random < 0.7) {
        dispatch({
          type: AUTH_FAILED,
          payload: json,
        });
      } else {
        dispatch({
          type: AUTH_SUCCEED,
          payload: json,
        });
      }
    });
};
