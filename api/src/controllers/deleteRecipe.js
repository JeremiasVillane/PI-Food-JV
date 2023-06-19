const { Recipe } = require("../db.js");

module.exports = async (idRecipe) => {
  const deletedRecipe = await Recipe.destroy({ where: { id: idRecipe } });

  // El método destroy() retorna la cantidad de filas eliminadas de la BDD
  // En este caso deletedRecipe solo puede tener los valores 0 o 1
  return deletedRecipe;
};
