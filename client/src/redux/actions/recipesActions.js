import axios from "axios";
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
  SET_ALERT,
  EDIT_RECIPE,
  RESET_EDIT,
} from "./action-types";
import { setLoading } from "./uiActions";

export const getAllRecipes = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data: recipes } = await axios("/recipes");
      dispatch({ type: GET_ALL_RECIPES, payload: recipes });
    } catch (error) {
      const errorMessage =
        error.response?.data?.error;
      dispatch({
        type: SET_ALERT,
        payload: { error: errorMessage },
      });
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getDiets = () => {
  return async (dispatch) => {
    try {
      const { data: diets } = await axios("/diets");
      dispatch({ type: GET_DIETS, payload: diets });
    } catch (error) {
      const errorMessage =
        error.response?.data?.error;
      dispatch({
        type: SET_ALERT,
        payload: { error: errorMessage },
      });
    }
  };
};

export const getRecipeDetail = (id, mode) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const {
        data: [recipe],
      } = await axios(`/recipes/${id}`);

      mode === "edit"
      ? dispatch({ type: EDIT_RECIPE, payload: recipe })
      : dispatch({ type: GET_RECIPE_DETAIL, payload: recipe });
    } catch (error) {
      const errorMessage =
        error.response?.data?.error;
      dispatch({
        type: SET_ALERT,
        payload: { error: errorMessage },
      });
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const resetDetail = () => {
  return {
    type: RESET_DETAIL,
  };
};

export const deleteRecipe = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const apiResponse = await axios.delete(`/recipes/${id}`);
      dispatch({ type: DELETE_RECIPE, payload: id });
      dispatch({
        type: SET_ALERT,
        payload: { success: apiResponse.data.message },
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.error;
      dispatch({ type: SET_ALERT, payload: { error: errorMessage } });
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const newRecipe = (recipeData) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const dietNames = Object.keys(recipeData.diets).filter(
        (dietName) => recipeData.diets[dietName]
      );
      recipeData.diets = dietNames;
      
      if (recipeData.id) {
        const {
          data: [editedRecipe],
        } = await axios.put(`/recipes/${recipeData.id}`, recipeData);
        dispatch({ type: NEW_RECIPE, payload: editedRecipe });
      } else {
        const {
          data: [createdRecipe],
        } = await axios.post("/recipes", recipeData);
        dispatch({ type: NEW_RECIPE, payload: createdRecipe });
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error;
      dispatch({ type: SET_ALERT, payload: { error: errorMessage } });
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const resetEdit = () => {
  return {
    type: RESET_EDIT,
  };
};

export const filtering = (filters) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { search = "", source = "", diets = {} } = filters;
      const dietNames = Object.keys(diets).filter(
        (dietName) => diets[dietName]
      );
      const selectedDiets = dietNames.join(",");

      const { data: recipes } = await axios.get(
        `/recipes/?name=${search}&source=${source}&diets=${selectedDiets}`
      );

      if (recipes.error) {
        dispatch({ type: SET_ALERT, payload: { error: recipes.error } });
      } else {
        dispatch({ type: FILTERING, payload: recipes });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error;
      dispatch({ type: SET_ALERT, payload: { error: errorMessage } });
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const resetFilters = () => {
  return {
    type: RESET_FILTERS,
  };
};

export const sorting = (order) => {
  return {
    type: SORTING,
    payload: order,
  };
};
