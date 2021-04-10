const RECIPES_LOAD_START = "recipes/load/start";
const RECIPES_LOAD_SUCCESS = "recipes/load/success";
const FILTER_SET = "filter/set";

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

    fetch("  http://localhost:3010/recipes")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: RECIPES_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
};
