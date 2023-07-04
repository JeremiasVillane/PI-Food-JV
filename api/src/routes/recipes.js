const recipesRouter = require("express").Router();
const { validatePost, validateGet } = require("../middlewares");
const {
  getRecipesHandler,
  getRecipeByIdHandler,
  postRecipeHandler,
  deleteRecipeHandler,
} = require("../handlers");

recipesRouter.get("/", getRecipesHandler);
recipesRouter.get("/:idRecipe", validateGet, getRecipeByIdHandler);

recipesRouter.post("/", validatePost, postRecipeHandler);

recipesRouter.delete("/:idRecipe", deleteRecipeHandler);

module.exports = recipesRouter;
