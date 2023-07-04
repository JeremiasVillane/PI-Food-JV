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
      // Añado a dietsFormatter() la propiedad vegetarian
      // como segundo parámetro:
      diets: dietsFormatter(recipe.diets, recipe.vegetarian),
      source: recipe.source ? "db" : "api", // API o BDD
    };

    includeSummary && (outputRecipe.summary = summary(recipe.summary));
    includeSteps && (outputRecipe.steps = steps(recipe));

    return outputRecipe;
  });

  return output;
};
