import { GET_ALL_RECIPES, GET_RECIPE_DETAIL } from "./action-types";

const initialState = {
  recipes: [],
  detail: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_RECIPES:
      return {...state,
      recipes: payload}
    case GET_RECIPE_DETAIL:
      return {...state,
      detail: payload}
    default:
      return { ...state };
  }
};

export default reducer;
