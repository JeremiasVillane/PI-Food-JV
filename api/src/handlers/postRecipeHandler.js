const { postRecipe } = require("../controllers");

module.exports = async (req, res) => {
  const { title, image, summary, healthScore, steps, diets } = req.body;

  try {
    // si falta alguno de los datos principales, arroja un error
    if (!title || !summary ) {
      return res.status(400).send("Missing data: It requires a valid name and a summary");
    }

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
