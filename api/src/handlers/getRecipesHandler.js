const { getRecipes } = require("../controllers");

module.exports = async (req, res) => {
  const { name } = req.query;

  try {
    // Traer todas las recetas o aquellas con el nombre igual al query, si lo hay
    const recipes = await getRecipes(name);

    res.status(200).json(recipes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
