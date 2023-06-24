import axios from "axios";
import {
  FILTERS,
  FILTER_BY_DIETS,
  GET_ALL_RECIPES,
  GET_DIETS,
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

export const resetDetail = () => {
  return {
    type: RESET_DETAIL,
  };
};

export const filtering = (filters) => {
  return async (dispatch) => {
    try {
      const { search, source, diets } = filters;
      const dietNames = Object.entries(diets)
      .filter(([_, selected]) => selected === true)
      .map(([dietName, _]) => dietName);

      const selectedDiets = dietNames.join(',');
      const apiData = await axios(
        `/recipes/?name=${search}&source=${source}&diets=${selectedDiets}`
      );
      const recipes = apiData.data;
      if (recipes.error) return window.alert(recipes.error);
      dispatch({ type: FILTERS, payload: recipes });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

export const filterByDiets = (diet) => {
  return async (dispatch) => {
    try {
      const apiData = await axios(`/recipes?diets=${diet}`);
      const filteredRecipes = apiData.data;
      dispatch({ type: FILTER_BY_DIETS, payload: filteredRecipes });
    } catch (error) {
      window.alert(error.message);
    }
  };
};

export const getDiets = () => {
  return async (dispatch) => {
    try {
      const apiData = await axios("/diets");
      const diets = apiData.data;
      dispatch({ type: GET_DIETS, payload: diets });
    } catch (error) {
      window.alert(error.message);
    }
  };
};
