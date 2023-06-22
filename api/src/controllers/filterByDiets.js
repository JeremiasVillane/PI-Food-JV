require("dotenv").config();
const axios = require("axios");
const { Diet, Recipe } = require("../db.js");
const { Op } = require("sequelize");
const recipeMapper = require("../helpers/recipeMapper.js");
const { API_KEY, API_URL } = process.env;
const URL = `${API_URL}/complexSearch?addRecipeInformation=true&number=100&apiKey=${API_KEY}`;

module.exports = async (name) => {
  // -------------- Búsqueda en la API -------------- //

  // Resultados de la API
  const apiResponse = (await axios(URL)).data.results;

  // Flitro las recipes que incluyan el name
  // y aplico el recipeMapper a cada una
  const apiResults = apiResponse
    .filter((recipe) => recipe.diets.includes(name))
    .map((recipe) => recipeMapper([recipe], "brief"));

  // -------------- Búsqueda en la BDD -------------- //

  // Si no hay coincidencias en la BDD
  // dbResults no se va a modificar
  let dbResults = [];

  // Busco las diets cuyo name coincida
  // e incluyo las recipes asociadas
  const dbDietsRecipes = await Diet.findAll({
    where: { name },
    include: {
      model: Recipe,
      as: "recipes",
      through: { attributes: [] },
    },
  });

  // Si hubo resultados de diets y recipes asociadas:
  if (dbDietsRecipes.length && dbDietsRecipes[0].recipes.length) {
    // Tomo las IDs de cada recipe...
    const dbRecipesIDs = dbDietsRecipes[0].recipes.map((recipe) => recipe.id);

    // ... y busco las recipes, incluyendo las diets asociadas
    const dbRecipes = await Recipe.findAll({
      where: {
        id: {
          [Op.in]: dbRecipesIDs,
        },
      },
      include: {
        model: Diet,
        as: "diets",
        attributes: ["name"],
        through: { attributes: [] },
      },
    });

    // Aplico el recipeMapper a la búsqueda en BDD
    dbResults = recipeMapper(dbRecipes, "brief");

    // Si hay un solo resultado, lo convierto en array
    // para poder aplicar el spread operator luego
    !Array.isArray(dbResults) && (dbResults = [dbResults]);
  }

  // Combino los resultados
  const recipes = [...dbResults, ...apiResults];

  // Si recipes está vacío no hubo coincidencias
  if (!recipes.length) {
    return { error: `No matches for ${name}` };
  }

  return recipes;
};
