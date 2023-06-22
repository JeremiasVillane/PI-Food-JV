const { getDiets, filterByDiets } = require("../controllers");

module.exports = async (req, res) => {
  const { name } = req.query;

  try {
    const allDiets =
      name 
        ? await filterByDiets(name) 
        : await getDiets();

    return res.status(200).json(allDiets);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
