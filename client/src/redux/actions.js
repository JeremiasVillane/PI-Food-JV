import axios from "axios";
import { GET_ALL_RECIPES, GET_RECIPE_DETAIL } from "./action-types";

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
      const recipe = apiData.data;
      dispatch({ type: GET_RECIPE_DETAIL, payload: recipe });
    } catch (error) {
      window.alert(error.message);
    }
  };
};
