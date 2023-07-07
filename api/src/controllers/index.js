const getRecipeById = require("./getRecipeById");
const getRecipes = require("./getRecipes");
const getDiets = require("./getDiets");
const postRecipe = require("./postRecipe");
const deleteRecipe = require("./deleteRecipe");
const filterByDiets = require("./filterByDiets");
const filterBySource = require("./filterBySource");
const putRecipe = require("./putRecipe");

module.exports = {
  getRecipeById,
  getRecipes,
  postRecipe,
  putRecipe,
  deleteRecipe,
  getDiets,
  filterByDiets,
  filterBySource,
};
