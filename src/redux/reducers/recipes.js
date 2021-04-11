const RECIPES_LOAD_START = "recipes/load/start";
const RECIPES_LOAD_SUCCESS = "recipes/load/success";
const FILTER_SET = "filter/set";
const LIKE_LOAD_START = "like/load/start";
const LIKE_LOAD_SUCCESS = "like/load/success";

const initialState = {
  items: [],
  filter: "",
  loading: false,
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

    case LIKE_LOAD_START:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              liking: true,
            };
          }
          return item;
        }),
      };

    case LIKE_LOAD_SUCCESS:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              like: item.like + 1,
              liking: false,
            };
          }
        }),
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

export const dataLike = (id, like) => {
  return (dispatch) => {
    dispatch({ type: LIKE_LOAD_START, payload: id });

    fetch("http://localhost:3010/recipes", {
      method: "PATCH",
      body: JSON.stringify({ like: like + 1 }),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: LIKE_LOAD_SUCCESS,
          payload: id,
        });
      });
  };
};
