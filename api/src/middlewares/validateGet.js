module.exports = (req, res, next) => {
  const { idRecipe } = req.params;
  const regex = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i

  // Si no se ingresó una ID que se corresponda 
  // con un UUIDv4 ni se ingresó un número 
  // retorna con un error
  if (!regex.test(idRecipe) && isNaN(idRecipe))
    return res.status(400).json({
      error: "Invalid ID",
    });
  next();
};
