import axios from "axios";
import {
  FILTER_BY_DIETS,
  FILTER_BY_SOURCE,
  GET_ALL_RECIPES,
  GET_RECIPE_DETAIL,
  RESET_DETAIL,
} from "./action-types";

export const getAllRecipes = () => {
  return async (dispatch) => {
    try {
      const apiData = await axios("/recipes");
      const recipes = apiData.data;
      dispatch({ type: GET_ALL_RECIPES, payload: recipes });
    } catch (error) {
      window.alert(error.message);
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
      window.alert(error.message);
    }
  };
};

export const filterByDiets = (diet) => {
  return async (dispatch) => {
    try {
      const apiData = await axios(`/recipes?diet=${diet}`);
      const filteredRecipes = apiData.data;
      dispatch({ type: FILTER_BY_DIETS, payload: filteredRecipes });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

export const filterBySource = (source) => {
  return async (dispatch) => {
    try {
      const api_Data = await axios(`/recipes?source${source}`);
      const filteredRecipes = api_Data.data;
      dispatch({ type: FILTER_BY_SOURCE, payload: filteredRecipes });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

export const resetDetail = () => {
  return {
    type: RESET_DETAIL,
  };
};
