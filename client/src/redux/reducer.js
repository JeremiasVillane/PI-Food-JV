import { CHANGE_PAGE, DELETE_RECIPE, ERROR, FILTERING, GET_ALL_RECIPES, GET_DIETS, GET_RECIPE_DETAIL, NEW_RECIPE, RESET_DETAIL, RESET_FILTERS, SORTING, } from "./action-types";

const initialState = {
  recipes: [],
  filteredRecipes: [],
  unorderedRecipes: [],
  detail: [],
  diets: [],
  currentPage: 0,
  elementsPerPage: 9,
  errors: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_RECIPES:
      return { ...state,
      recipes: payload, 
      filteredRecipes: payload };
    case GET_RECIPE_DETAIL:
      return { ...state,
      detail: payload };
    case RESET_DETAIL:
      return { ...state,
      detail: []};
    case NEW_RECIPE:
      return { ...state,
      // recipes: [payload, ...state.recipes ],
      // filteredRecipes: state.recipes,
      detail: payload };
    case DELETE_RECIPE:
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== payload);
      return {
        ...state,
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
        unorderedRecipes: updatedRecipes,
      }
    case FILTERING:
      return { ...state,
      filteredRecipes: payload,
      unorderedRecipes: payload };
    case SORTING:
      const recipesCopy = [...state?.filteredRecipes];
      let sortedRecipes;
      payload === "default" && (sortedRecipes = [...state.unorderedRecipes]);
      // localCompare() ordena teniendo en cuenta los espacios y caracteres especiales
      payload === "az" 
        && (sortedRecipes = recipesCopy
          .sort((a, b) => a.title.localeCompare(b.title)));
      payload === "za" 
        && (sortedRecipes = recipesCopy
          .sort((a, b) => b.title.localeCompare(a.title)));
      payload === "healthAsc" 
        && (sortedRecipes = recipesCopy
          .sort((a, b) => a.healthScore - b.healthScore));
      payload === "healthDesc" 
        && (sortedRecipes = recipesCopy
          .sort((a, b) => b.healthScore - a.healthScore));
      return { ...state,
      filteredRecipes: sortedRecipes };
    case RESET_FILTERS:
      return { ...state,
      filteredRecipes: [...state.recipes],
      unorderedRecipes: [...state.recipes] };
    case GET_DIETS:
      return { ...state,
      diets: payload };
    case CHANGE_PAGE:
      return { ...state,
      currentPage: payload };
    case ERROR:
      return { ...state,
      errors: payload };
    default:
      return { ...state };
  }
};

export default reducer;
