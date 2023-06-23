const { getRecipes, filterBySource, filterByDiets } = require("../controllers");

module.exports = async (req, res) => {
  const { name, source, diets } = req.query;
  let results;

  try {
    // Si se incluye el query `name`, busca por nombre, si no, trae todas las recipes
    await getRecipes(name)
      .then((data) => {
        // Si se incluye el query `source`, se añade el filtro de origen
        if (source) {
          results = filterBySource(data, source);
          // Si se incluye el query `diet`, se añade el filtro por dieta
          if (diets) {
            results = filterByDiets(results, diets);
          } else results = results;
          // Si no se incluye `source`, solo filtra por dieta
        } else if (diets) {
          results = filterByDiets(data, diets);
        } else {
          // Si no se incluyen filtros, el resultado es la búsqueda inicial
          results = data;
        }
      })
      .catch(() => {
        return { error: "No results" };
      });

    if (!results) return res.status(400).json({ error: "No results" });

    res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
