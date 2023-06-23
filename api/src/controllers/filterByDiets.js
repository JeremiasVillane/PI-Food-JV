module.exports = (recipes, diets) => {
  if (diets.includes(",")) {
    const dietsArray = diets.split(",");
    const filteredRecipes = recipes.filter((recipe) =>
      dietsArray.every((diet) => recipe.diets.includes(diet))
    );

    if (!filteredRecipes.length) {
      return null;
    }
    return filteredRecipes;
  }
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.diets.includes(diets)
  );

  if (!filteredRecipes.length) {
    return null;
  }
  return filteredRecipes;
};
