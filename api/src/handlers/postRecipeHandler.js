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
    if (error.name === "SequelizeUniqueConstraintError") 
    return res.status(400).json({ error: "That recipe title already exist" });
  }
};
