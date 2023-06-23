module.exports = (recipes, source) => {
  const filteredRecipes = recipes.filter((recipe) => recipe.source === source);

  if (!filteredRecipes.length) {
    return { error: "No results" };
  }
  return filteredRecipes;
};
