import axios from "axios";
import {
  CHANGE_PAGE,
  ERROR,
  FILTERING,
  GET_ALL_RECIPES,
  GET_DIETS,
  GET_RECIPE_DETAIL,
  NEW_RECIPE,
  RESET_DETAIL,
  SORTING,
} from "./action-types";

export const getAllRecipes = () => {
  return async (dispatch) => {
    try {
      const apiData = await axios("/recipes");
      const recipes = apiData.data;
      dispatch({ type: GET_ALL_RECIPES, payload: recipes });
    } catch (error) {
      window.alert("The recipes couldn't be loaded, please try again later...");
      return dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const getRecipeDetail = (id) => {
  return async (dispatch) => {
    try {
      const apiData = await axios(`/recipes/${id}`);
      const recipe = apiData.data[0];
      dispatch({ type: GET_RECIPE_DETAIL, payload: recipe });
    } catch (error) {
      window.alert("The recipe couldn't be loaded, please try again later...");
      return dispatch({
        type: ERROR,
        payload: error.message || error.response.data.message,
      });
    }
  };
};

export const resetDetail = () => {
  return {
    type: RESET_DETAIL,
  };
};

export const filtering = (filters) => {
  return async (dispatch) => {
    try {
      let { search, source, diets } = filters;
      search === undefined && (search = "");
      const dietNames = Object.entries(diets)
        .filter(([_, selected]) => selected === true)
        .map(([dietName, _]) => dietName);

      const selectedDiets = dietNames.join(",");
      const apiData = await axios(
        `/recipes/?name=${search}&source=${source}&diets=${selectedDiets}`
      );
      let recipes = apiData.data;
      if (recipes.error) return window.alert(recipes.error);
      dispatch({ type: FILTERING, payload: recipes });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const sorting = (order) => {
  return {
    type: SORTING,
    payload: order,
  };
};

export const getDiets = () => {
  return async (dispatch) => {
    try {
      const apiData = await axios("/diets");
      const diets = apiData.data;
      dispatch({ type: GET_DIETS, payload: diets });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const changePage = (pageNumber) => ({
  type: CHANGE_PAGE,
  payload: pageNumber,
});

export const newRecipe = (recipeData) => {
  return async (dispatch) => {
    try {
      const dietNames = Object.entries(recipeData.diets)
      .filter(([_, selected]) => selected === true)
      .map(([dietName, _]) => dietName);
      recipeData.diets = dietNames;
      
      const apiResponse = await axios.post("/recipes", recipeData);
      const createdRecipe = apiResponse.data;

      dispatch({ type: NEW_RECIPE, payload: createdRecipe[0] });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};
