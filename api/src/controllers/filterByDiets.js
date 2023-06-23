module.exports = (recipes, diets) => {
  if (diets.includes(",")) {
    diets[0] === "," && (diets = diets.slice(1))
    const dietsArray = diets.split(",");
    const filteredRecipes = recipes.filter((recipe) =>
      dietsArray.every((diet) => recipe.diets.includes(diet))
    );

    if (!filteredRecipes.length) {
      return {error: "Nothing found"};
    }
    return filteredRecipes;
  }
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.diets.includes(diets)
  );

  if (!filteredRecipes.length) {
    return {error: "Nothing found"};
  }
  return filteredRecipes;
};
