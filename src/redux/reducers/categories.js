const CATEGORIES_SUCCESS = 'categories/success';
const initialState = {
  items: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}

export const loadCategories = () => {
  return (dispatch) => {
    fetch('http://localhost:3010/categories')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: CATEGORIES_SUCCESS,
          payload: json,
        });
      });
  };
};
