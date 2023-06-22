module.exports = (diets) => {
  if (Array.isArray(diets)) {
    return diets.map((diet) => (typeof diet === "object" ? diet.name : diet));
  }
  return [];
};
