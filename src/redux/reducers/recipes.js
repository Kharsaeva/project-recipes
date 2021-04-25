const RECIPES_LOAD_START = 'recipes/load/start';
const RECIPES_LOAD_SUCCESS = 'recipes/load/success';
const FILTER_SET = 'filter/set';
const DELETE_LOAD_START = 'delete/load/start';
const DELETE_LOAD_SUCCESS = 'delete/load/success';

const initialState = {
  items: [],
  filter: '',
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

    default:
      return state;
  }
}

export const setFilterText = (text) => {
  return {
    type: FILTER_SET,
    payload: text,
  };
};

export const loadRecipes = () => {
  return (dispatch) => {
    dispatch({ type: RECIPES_LOAD_START });

    fetch('http://localhost:3010/recipes')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: RECIPES_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
};

export const itemDelete = (id) => {
  return function (dispatch) {
    dispatch({ type: DELETE_LOAD_START, payload: id });

    fetch('http://localhost:3010/recipes', {
      method: 'DELETE',
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
