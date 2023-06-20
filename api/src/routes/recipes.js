const recipesRouter = require("express").Router();
const { validatePost, validateGet } = require("../middlewares");
const {
  getRecipesHandler,
  getRecipeByIdHandler,
  postRecipeHandler,
  deleteRecipeHandler,
} = require("../handlers");

// GET
recipesRouter.get("/", getRecipesHandler);
recipesRouter.get("/:idRecipe", validateGet, getRecipeByIdHandler);

// POST
recipesRouter.post("/", validatePost, postRecipeHandler);

// PUT

// DELETE
recipesRouter.delete("/:idRecipe", deleteRecipeHandler);

module.exports = recipesRouter;
