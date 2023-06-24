module.exports = (diets, veggie) => {
  if (Array.isArray(diets)) {
    let mappedDiets = diets.map((diet) => (typeof diet === "object" ? diet.name : diet));
    // Si la recipe tiene vegetarian en true
    // añado la diet a la lista.
    veggie && mappedDiets.push("vegetarian");
    return mappedDiets;
  }
  return [];
};
