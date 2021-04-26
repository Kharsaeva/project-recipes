const FAVORITE_SET_START = 'favorite/set/start';
const FAVORITE_SET_SUCCESS = 'favorite/set/success';

const initialState = {
  items: [],
  filter: '',
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
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

    default:
      return state;
  }
}

export function favoritePatch(id, favorite) {
  return (dispatch) => {
    dispatch({
      type: FAVORITE_SET_START,
    });
    fetch(`http://localhost:3010/recipes/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ favorite: !favorite }),
      headers: { 'Content-type': 'application/json' },
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
