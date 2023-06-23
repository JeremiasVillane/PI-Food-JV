import { FILTER_BY_DIETS, FILTER_BY_SOURCE, GET_ALL_RECIPES, GET_RECIPE_DETAIL, RESET_DETAIL } from "./action-types";

const initialState = {
  recipes: [],
  recipesBackup: [],
  detail: [],
  filter: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_RECIPES:
      return {...state,
      recipes: payload};
    case GET_RECIPE_DETAIL:
      return {...state,
      detail: payload};
      case FILTER_BY_DIETS:
        return {...state,
        filter: payload};
      case FILTER_BY_SOURCE:
        return {...state,
        filter: payload};
      case RESET_DETAIL:
        return {...state,
        detail: []};
    default:
      return { ...state };
  }
};

export default reducer;
