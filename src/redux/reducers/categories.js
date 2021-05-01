const NAME_LOAD_START = 'name/load/start';
const NAME_LOAD_SUCCESS = 'name/load/success';

const initialState = {
  items: [],
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action) {
    case NAME_LOAD_START:
      return {
        ...state,
        loadingItems: true,
      };

    case NAME_LOAD_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loadingItems: false,
      };

    default:
      return state;
  }
}

export const nameRecipes = () => {
  return function (dispatch) {
    dispatch({ type: NAME_LOAD_START });

    fetch('http://localhost:3010/categories')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: NAME_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
};
