const { Recipe, Diet } = require("../db");
const recipeMapper = require("../helpers/recipeMapper");

module.exports = async (title, image, summary, healthScore, steps, diets) => {
  const recipe = await Recipe.create({
    title,
    image,
    summary,
    healthScore,
    steps,
  });

  // Busco la diet si ya existe o creo una nueva si no existe:
  // findOrCreate() devuelve un array de tuplas que contiene un objeto
  // Diet y un booleano indicando si se creó o se encontró la instancia
  const foundOrCreatedDiets = await Promise.all(
    diets.map((diet) => Diet.findOrCreate({ where: { name: diet } }))
  );

  // Asocio cada diet con su correspondiente recipe:
  // Obtengo el id del objeto en el índice 0 de cada tupla
  // y lo paso a setDiets() para asociar la recipe y las diets correspondientes
  await recipe.setDiets(foundOrCreatedDiets.map((diet) => diet[0].id));

  // Busco la recipe recién creada y la asocio con sus dietas:
  const recipeWithDiets = await Recipe.findByPk(recipe.id, {
    include: [
      {
        model: Diet,
        as: "diets",
        attributes: ["name"],
        through: { attributes: [] },
      },
    ],
  });

  // Mapeo la receta y la retorno
  return recipeMapper([recipeWithDiets]);
};

// Obtengo las diets asociadas con las recipes:
// Con getDiets(), Sequelize realiza una consulta a la BDD y recupera
// los registros relacionados en la tabla de asociación entre Recipe y Diet
// const recipeDiets = await recipe.getDiets();

// Retorno un objeto con la información:
// La receta creada y las dietas asociadas
// const output = [recipe, recipeDiets];
// return output;
