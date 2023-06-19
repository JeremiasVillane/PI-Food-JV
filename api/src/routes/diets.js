const dietsRouter = require("express").Router();
const { getDietsHandler } = require("../handlers");

dietsRouter.get("/", getDietsHandler);

module.exports = dietsRouter;
