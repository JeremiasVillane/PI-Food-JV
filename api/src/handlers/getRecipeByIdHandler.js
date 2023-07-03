const { getRecipeById } = require("../controllers");

module.exports = async (req, res) => {
  const { idRecipe } = req.params;

  // Si no se ingresó una ID se responde con un error
  if (!idRecipe)
    return res.status(400).json({
      error: "No ID has been entered",
    });

  try {
    const recipeById = await getRecipeById(idRecipe);
    if (recipeById.error)
      return res.status(500).json({
        error: recipeById.error,
      });
    res.status(200).json(recipeById);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
