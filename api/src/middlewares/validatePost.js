module.exports = (req, res, next) => {
  const { title, summary, image, diets } = req.body;
  const regex = /^(https?:\/\/)?(?:www\.)?\S+\.(?:jpg|jpeg|png|gif)$/i;

  // Si falta alguno de los datos principales,
  // arroja un error
  if (!title) return res.status(400).json({ error: "It requires a title" });
  if (!summary) return res.status(400).json({ error: "It requires a summary" });
  if (!diets) return res.status(400).json({ error: "Yo have to specify related diets" });

  // Verifico que se trate de una url de imagen válida:
  // - http, https, y www son opcionales
  // - las extensiones pueden estar tanto en min como may
  if (image && !regex.test(image))
    return res.status(400).json({ error: "It must be a valid image url" });

  next();
};
