const { putRecipe } = require("../controllers");

module.exports = async (req, res) => {
  const { title, image, summary, healthScore, steps, diets } = req.body;
  const { idRecipe } = req.params;

  try {
    const editedRecipe = await putRecipe(
      idRecipe,
      title,
      image,
      summary,
      healthScore,
      steps,
      diets
    );
    return res.status(201).json(editedRecipe);
  } catch (error) {
    return res.status(500).json({ error: "The recipe couldn't be edited" });
  }
};
