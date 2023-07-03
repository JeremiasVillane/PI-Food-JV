import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";
import paginationReducer from "./paginationReducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
  recipes: recipesReducer,
  pagination: paginationReducer,
  ui: uiReducer,
});

export default rootReducer;
