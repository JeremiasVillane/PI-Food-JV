import {
  GET_ALL_RECIPES,
  GET_DIETS,
  GET_RECIPE_DETAIL,
  RESET_DETAIL,
  NEW_RECIPE,
  DELETE_RECIPE,
  FILTERING,
  RESET_FILTERS,
  SORTING,
  EDIT_RECIPE,
  RESET_EDIT,
} from "../actions/action-types";

const initialState = {
  recipes: [],
  filteredRecipes: [],
  unorderedRecipes: [],
  detail: {},
  edit: {},
  diets: [],
};

const recipesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: payload,
        filteredRecipes: payload,
        unorderedRecipes: payload,
      };
    case GET_RECIPE_DETAIL:
      return { ...state, detail: payload };
    case RESET_DETAIL:
      return { ...state, detail: {} };
    case NEW_RECIPE:
      return {
        ...state,
        detail: payload,
      };
    case EDIT_RECIPE:
      return {
        ...state,
        edit: payload,
      }
    case RESET_EDIT:
      return {
        ...state,
        edit: {},
      }
    case DELETE_RECIPE:
      const updatedRecipes = state.recipes.filter(
        (recipe) => recipe.id !== payload
      );
      return {
        ...state,
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
        unorderedRecipes: updatedRecipes,
      };
    case FILTERING:
      return { ...state, filteredRecipes: payload, unorderedRecipes: payload };
    case SORTING:
      const recipesCopy = [...state?.filteredRecipes];
      let sortedRecipes;

      const sortingFunctions = {
        default: () => [...state.unorderedRecipes],
        az: () => recipesCopy.sort((a, b) => a.title.localeCompare(b.title)),
        za: () => recipesCopy.sort((a, b) => b.title.localeCompare(a.title)),
        healthAsc: () =>
          recipesCopy.sort((a, b) => a.healthScore - b.healthScore),
        healthDesc: () =>
          recipesCopy.sort((a, b) => b.healthScore - a.healthScore),
      };
      sortedRecipes = sortingFunctions[payload]();

      return { ...state, filteredRecipes: sortedRecipes };
    case RESET_FILTERS:
      return {
        ...state,
        filteredRecipes: [...state.recipes],
        unorderedRecipes: [...state.recipes],
      };
    case GET_DIETS:
      return { ...state, diets: payload };
    default:
      return { ...state };
  }
};

export default recipesReducer;
