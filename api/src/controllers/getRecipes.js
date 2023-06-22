require("dotenv").config();
const axios = require("axios");
const { Op } = require("sequelize");
const { Recipe, Diet } = require("../db.js");
const recipeMapper = require("../helpers/recipeMapper.js");
const { API_KEY, API_URL } = process.env;
const URL = `${API_URL}/complexSearch?addRecipeInformation=true&number=100&apiKey=${API_KEY}`;

module.exports = async (name) => {
  // Resultados de la BDD:
  const dbResults = await Recipe.findAll({
    where: name ? { title: { [Op.iLike]: `%${name}%` } } : {},
    include: {
      model: Diet,
      as: "diets",
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  // Respuesta de la API (100 recipes):
  const apiResponse = (await axios(URL)).data.results;

  // Filtro los resultados de la API si hubo un name,
  // si no, guardo la respuesta completa de la API
  const apiResults = name
    ? apiResponse?.filter((recipe) =>
        recipe.title.toLowerCase().includes(name.toLowerCase())
      )
    : apiResponse;

  // Combino los resultados:
  let recipes = [...dbResults, ...apiResults];

  // Si recipes está vacío no hubo coincidencias
  if (!recipes.length) {
    return { error: `No matches for ${name}` };
  }

  // Mapeo las recetas y las retorno
  return recipeMapper(recipes, "brief");  
};




// Si es una recipe de la BDD, tendrá una key "steps" 
// y "diets" será un array de objetos
// Si es de la API los "steps" estarán dentro de "analyzedInstructions" 
// y "diets" será un array de strings
// const output = recipes.map((recipe) => ({
//   id: recipe.id,
//   title: recipe.title,
//   image: recipe.image,
//   summary: recipe.summary,
//   healthScore: recipe.healthScore,
//   steps: recipe.analyzedInstructions
//     ? recipe.analyzedInstructions[0]?.steps.reduce((obj, s) => {
//         obj[s.number] = s.step;
//         return obj;
//       }, {})
//     : recipe.steps,
//   diets: recipe.diets.map((diet) => (diet.name ? diet.name : diet)),
// }));
//return output;