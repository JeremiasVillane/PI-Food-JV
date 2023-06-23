const dietsFormatter = require("./dietsFormatter");
const stepsFormatter = require("./stepsFormatter");
const summaryCleaner = require("./summaryCleaner");

// Si son recipes de la BDD, tendrán una key "steps"
// y "diets" será un array de objetos
// Si son de la API los "steps" estarán dentro de "analyzedInstructions"
// y "diets" será un array de strings

module.exports = (recipes, mode) => {
  const modes = {
    // Defino los modos full y brief
    full: {
      includeSummary: true,
      includeSteps: true,
      summary: summaryCleaner,
      steps: stepsFormatter,
    },
    brief: {
      includeSummary: false,
      includeSteps: false,
    },
  };

  // Elijo el modo dinámicamente
  // Por defecto es "full"
  const selectedMode = modes[mode] || modes.full;

  const output = recipes.map((recipe) => {
    const { includeSummary, includeSteps, summary, steps } = selectedMode;

    const outputRecipe = {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      healthScore: recipe.healthScore,
      diets: dietsFormatter(recipe.diets),
      source: recipe.source === "db" ? recipe.source : "api", // API o BDD
    };

    if (includeSummary) {
      outputRecipe.summary = summary(recipe.summary);
    }

    if (includeSteps) {
      outputRecipe.steps = steps(recipe);
    }

    return outputRecipe;
  });

  // Si el resultado son más de una receta, retorno el arreglo completo
  // Si es una sola receta, retorno solo la receta
  return output //.length > 1 ? output : output[0];
};
