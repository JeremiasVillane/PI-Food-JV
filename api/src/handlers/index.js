const deleteRecipeHandler = require("./deleteRecipeHandler");
const getDietsHandler = require("./getDietsHandler");
const getRecipeByIdHandler = require("./getRecipeByIdHandler");
const getRecipesHandler = require("./getRecipesHandler");
const postRecipeHandler = require("./postRecipeHandler");
const putRecipeHandler = require("./putRecipeHandler");

module.exports = {
  getRecipeByIdHandler,
  getRecipesHandler,
  postRecipeHandler,
  putRecipeHandler,
  deleteRecipeHandler,
  getDietsHandler,
};
