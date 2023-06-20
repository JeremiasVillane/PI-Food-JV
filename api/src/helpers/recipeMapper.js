// Si son recipes de la BDD, tendrán una key "steps"
// y "diets" será un array de objetos
// Si son de la API los "steps" estarán dentro de "analyzedInstructions"
// y "diets" será un array de strings

module.exports = (recipes) => {
  const output = recipes.map((recipe) => ({
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    summary: recipe.summary,
    healthScore: recipe.healthScore,
    steps: recipe.analyzedInstructions
      ? recipe.analyzedInstructions[0]?.steps.reduce((obj, s) => {
          obj[s.number] = s.step;
          return obj;
        }, {})
      : recipe.steps,
    diets: recipe.diets.map((diet) => (diet.name ? diet.name : diet)),
  }));
  // Si el resultado son más de una recipe retorno el array completo
  // Si es una sola recipe, retorno solo la recipe
  return output.length > 1 ? output : output[0];
};
