require("dotenv").config();
const axios = require("axios");
const { Recipe, Diet } = require("../db.js");
const recipeMapper = require("../helpers/recipeMapper.js");
const { API_KEY, API_URL } = process.env;

module.exports = async (idRecipe) => {
  let foundRecipe;

  // Si idRecipe es un número, se busca en la API
  if (isFinite(idRecipe)) {
    const response = await axios(
      `${API_URL}/${idRecipe}/information?apiKey=${API_KEY}`
    );
    foundRecipe = response.data;
  } else {
    // Si idRecipe no es un número, se busca en la BDD
    foundRecipe = await Recipe.findByPk(idRecipe, {
      include: {
        model: Diet,
        as: "diets",
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
  }

  // Si foundRecipe está vacío no hubo coincidencias
  if (!foundRecipe) {
    return { error: `Nothing found` };
  }

  // Mapeo la receta y la retorno
  return recipeMapper([foundRecipe], "full");
};

// const { id, title, image, summary, healthScore, diets } = foundRecipe;

// // Si es una recipe de la BDD, tendrá una key "steps"
// // y "diets" será un array de objetos
// // Si es de la API los "steps" estarán dentro de "analyzedInstructions"
// // y "diets" será un array de strings
// return {
//   id,
//   title,
//   image,
//   summary,
//   healthScore,
//   steps: foundRecipe.analyzedInstructions
//     ? foundRecipe.analyzedInstructions[0]?.steps.reduce((obj, s) => {
//         obj[s.number] = s.step;
//         return obj;
//       }, {})
//     : foundRecipe.steps,
//   diets: diets.map((diet) => (diet.name ? diet.name : diet)),
// };
