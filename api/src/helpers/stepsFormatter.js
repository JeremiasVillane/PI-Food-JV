module.exports = (recipe) => {
  if (recipe.analyzedInstructions) {
  return recipe.analyzedInstructions[0]?.steps.reduce((obj, s) => {
    obj[s.number] = s.step;
    return obj;
  }, {})
}
return recipe.steps
}