require("dotenv").config();
const axios = require("axios");
const { Op } = require("sequelize");
const { Recipe, Diet } = require("../db.js");
const recipeMapper = require("../helpers/recipeMapper.js");
const { API_KEY, API_URL } = process.env;
const URL = `${API_URL}/complexSearch?addRecipeInformation=true&number=100&apiKey=${API_KEY}`;

// Búsqueda de fragmentos de palabra que coincidan
// con cualquier parte del título, en cualquier orden
module.exports = async (name) => {
  //-------------- Resultados de la BDD --------------//
  const dbResults = await Recipe.findAll({
    // Con Op.and se busca consecutivamente cada palabra
    // contemplando que haya espacio entre ellas
    // Con Op.iLike se busca en mayúsculas y minúsculas
    where: name
      ? {
          [Op.and]: name.split(" ").map((word) => ({
            title: { [Op.iLike]: `%${word}%` },
          })),
        }
      : {},
    include: {
      model: Diet,
      as: "diets",
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  //------- Respuesta de la API (100 recipes) -------//
  const apiResponse = (await axios(URL)).data.results;

  // Filtro los resultados de la API si hubo un name,
  // si no, guardo la respuesta completa de la API
  const apiResults = name
    ? apiResponse?.filter((recipe) => {
        // Por cada palabra, se verifica que esté incluida en el título
        // sea en minúsculas o mayúsculas, completa o parcialmente
        const words = name.toLowerCase().split(" ");
        return words.every((word) => recipe.title.toLowerCase().includes(word));
      })
    : apiResponse;

  // Combino los resultados:
  let recipes = [...dbResults, ...apiResults];

  // Si recipes está vacío no hubo coincidencias
  if (!recipes.length) {
    return { error: `No recipe named "${name}" was found` };
  }

  // Mapeo las recetas y las retorno
  return recipeMapper(recipes, "brief");
};