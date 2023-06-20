module.exports = (req, res, next) => {
  const { title, summary, image } = req.body;
  const regex = /^(https?:\/\/)?(?:www\.)?\S+\.(?:jpg|jpeg|png|gif)$/i;

  // Si falta alguno de los datos principales,
  // arroja un error
  if (!title || !summary)
    return res.status(400).json({ error: "It requires a name and a summary" });

  // Verifico que se trate de una url de imagen válida:
  // - http, https, y www son opcionales
  // - las extensiones pueden estar tanto en min como may
  if (!regex.test(image))
    return res.status(400).json({ error: "It must be a valid image url" });

  next();
};
