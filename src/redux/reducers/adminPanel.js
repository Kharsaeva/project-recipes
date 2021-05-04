const initialState = {
  loading: false,
  recipe: {
    title: '',
    time: '',
    like: false,
    favorite: false,
    ingredients: '',
    cooking: '',
    comments: '',
    url: '',
    calories: '',
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'update/title':
      return {
        ...state,
        recipe: {
          ...state.recipe,
          title: action.payload,
        },
      };
    case 'update/time':
      return {
        ...state,
        recipe: {
          ...state.recipe,
          time: action.payload,
        },
      };
    case 'update/ingredients':
      return {
        ...state,
        recipe: {
          ...state.recipe,
          ingredients: action.payload,
        },
      };
    case 'update/Cooking':
      return {
        ...state,
        recipe: {
          ...state.recipe,
          cooking: action.payload,
        },
      };
    case 'update/url':
      return {
        ...state,
        recipe: {
          ...state.recipe,
          url: action.payload,
        },
      };
    case 'update/calories':
      return {
        ...state,
        recipe: {
          ...state.recipe,
          calories: action.payload,
        },
      };
    case 'add/recipe/started':
      return {
        ...state,
        loading: true,
      };
    case 'add/recipe/succeed':
      return {
        ...state,
        loading: false,
        recipe: {
          title: '',
          time: '',
          like: false,
          favorite: false,
          ingredients: '',
          cooking: '',
          comments: '',
          url: '',
          calories: '',
        },
      };
    default:
      return state;
  }
}
export const changeRecipeTitle = (e) => {
  return {
    type: 'update/title',
    payload: e,
  };
};

export const changeRecipeTime = (e) => {
  return {
    type: 'update/time',
    payload: e,
  };
};
export const changeRecipeIngredients = (e) => {
  return {
    type: 'update/ingredients',
    payload: e,
  };
};
export const changeRecipeCooking = (e) => {
  return {
    type: 'update/Cooking',
    payload: e,
  };
};

export const changeRecipeUrl = (e) => {
  return {
    type: 'update/url',
    payload: e,
  };
};

export const changeRecipeCalories = (e) => {
  return {
    type: 'update/calories',
    payload: e,
  };
};

export const addRecipe = () => {
  return (dispatch, getState) => {
    const { recipe } = getState().adminPanel;
    dispatch({ type: 'add/recipe/started' });
    fetch('http://localhost:3010/recipes', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: recipe.title,
        time: recipe.time,
        like: false,
        favorite: false,
        ingredients: recipe.ingredients,
        cooking: recipe.cooking,
        comments: '',
        url: recipe.url,
        calories: recipe.calories,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        dispatch({
          type: 'add/recipe/succeed',
        });
      });
  };
};
