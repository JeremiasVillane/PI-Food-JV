import { FILTERS, GET_ALL_RECIPES, GET_DIETS, GET_RECIPE_DETAIL, RESET_DETAIL } from "./action-types";

const initialState = {
  recipes: [],
  detail: [],
  filter: [],
  diets: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_RECIPES:
      return {...state,
      recipes: payload};
    case GET_RECIPE_DETAIL:
      return {...state,
      detail: payload};
    case RESET_DETAIL:
      return {...state,
      detail: []};
    case FILTERS:
      return {...state,
      filter: payload};
    case GET_DIETS:
      return {...state,
      diets: payload};
    default:
      return { ...state };
  }
};

export default reducer;
