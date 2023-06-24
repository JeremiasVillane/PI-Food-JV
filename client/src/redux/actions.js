import axios from "axios";
import {
  FILTERS,
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

export const filtering = (filters, value) => {
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
      let recipes = apiData.data;
      if (recipes.error) return window.alert(recipes.error);
      if (value) {
        if (value === "az") {
          recipes = recipes.sort((a, b) => a.id - b.id);
        } else if (value === "za") {
          recipes = recipes.sort((a, b) => b.id - a.id);
        }
      }
      dispatch({ type: FILTERS, payload: recipes });
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
