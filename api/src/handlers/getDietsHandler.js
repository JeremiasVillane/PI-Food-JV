const { getDiets } = require("../controllers");

module.exports = async (req, res) => {
  try {
    const allDiets = await getDiets();

    return res.status(200).json(allDiets);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
