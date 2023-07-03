const { deleteRecipe } = require("../controllers");

module.exports = async (req, res) => {
  const { idRecipe } = req.params;

  try {
    const deletedRecipe = await deleteRecipe(idRecipe);

    if (deletedRecipe === 0)
      return res.status(400).json({ error: "No recipe found" });

    res.status(200).json({ message: "Recipe successfully removed" });
  } catch (error) {
    res.status(500).json({ error: "The recipe couldn't be removed" });
  }
};
