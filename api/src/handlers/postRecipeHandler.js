const { postRecipe } = require("../controllers");

module.exports = async (req, res) => {
  const { title, image, summary, healthScore, steps, diets } = req.body;

  try {
    const newRecipe = await postRecipe(
      title,
      image,
      summary,
      healthScore,
      steps,
      diets
    );
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
