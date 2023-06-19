const mainRouter = require("express").Router();
const recipesRouter = require("./recipes");
const dietsRouter = require("./diets");

mainRouter.use("/recipes", recipesRouter);
mainRouter.use("/diets", dietsRouter);

module.exports = mainRouter;
