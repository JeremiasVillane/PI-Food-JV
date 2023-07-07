const recipesRouter = require("express").Router();
const { validatePost, validateGet } = require("../middlewares");
const {
  getRecipesHandler,
  getRecipeByIdHandler,
  postRecipeHandler,
  deleteRecipeHandler,
  putRecipeHandler,
} = require("../handlers");

recipesRouter.get("/", getRecipesHandler);
recipesRouter.get("/:idRecipe", validateGet, getRecipeByIdHandler);

recipesRouter.post("/", validatePost, postRecipeHandler);

recipesRouter.put("/:idRecipe", putRecipeHandler);

recipesRouter.delete("/:idRecipe", deleteRecipeHandler);

module.exports = recipesRouter;
