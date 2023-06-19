const recipesRouter = require("express").Router();
const {
  getRecipesHandler,
  getRecipeByIdHandler,
  postRecipeHandler,
  deleteRecipeHandler,
} = require("../handlers");

// GET
recipesRouter.get("/", getRecipesHandler);
recipesRouter.get("/:idRecipe", getRecipeByIdHandler);

// POST
recipesRouter.post("/", postRecipeHandler);

// PUT

// DELETE
recipesRouter.delete("/:idRecipe", deleteRecipeHandler)

module.exports = recipesRouter;
