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
    return res.status(201).json(newRecipe);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "That recipe title already exist" });
    }
    return res.status(500).json({ error: "The recipe couldn't be created" });
  }
};
