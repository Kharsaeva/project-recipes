const RECIPES_LOAD_START = "recipes/load/start";
const RECIPES_LOAD_SUCCESS = "recipes/load/success";
const FILTER_SET = "filter/set";
const FAVORITE_SET_START = "favorite/set/start";
const FAVORITE_SET_SUCCESS = "favorite/set/success";

const initialState = {
  items: [],
  filter: "",
  loading: false,
  likeState: false,
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

    case FAVORITE_SET_SUCCESS:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              favorite: true,
            };
          }
          return item;
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

export function favoritePatch(id, favorite) {
  return (dispatch) => {
    dispatch({
      type: FAVORITE_SET_START,
    });
    fetch(`https://localhost:3010/recipes/${id}`, {
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
