module.exports = (recipe) => {
  if (recipe.analyzedInstructions) {
  return recipe.analyzedInstructions[0]?.steps.reduce((arr, s) => {
    arr.push({number: s.number, step: s.step});
    return arr;
  }, [])
}
return recipe.steps
}