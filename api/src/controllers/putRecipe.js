const { Recipe, Diet } = require("../db");
const recipeMapper = require("../helpers/recipeMapper");

module.exports = async (
  idRecipe,
  title,
  image,
  summary,
  healthScore,
  steps,
  diets
) => {
  const foundRecipe = await Recipe.findByPk(idRecipe);

  const editedRecipe = await foundRecipe.update({
    title: title ?? foundRecipe.title,
    image: image ?? foundRecipe.image,
    summary: summary ?? foundRecipe.summary,
    healthScore: healthScore ?? foundRecipe.healthScore,
    steps: steps ?? foundRecipe.steps,
  });

  if (diets) {
    const foundOrCreatedDiets = await Promise.all(
      diets.map((diet) => Diet.findOrCreate({ where: { name: diet } }))
    );

    await editedRecipe.setDiets(foundOrCreatedDiets.map((diet) => diet[0].id));
  }

  const recipeWithDiets = await Recipe.findByPk(idRecipe, {
    include: [
      {
        model: Diet,
        as: "diets",
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });

  return recipeMapper([recipeWithDiets], "full");
};
