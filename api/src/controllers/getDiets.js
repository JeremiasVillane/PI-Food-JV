require("dotenv").config();
const axios = require("axios");
const { Diet } = require("../db.js");
const { API_KEY, API_URL } = process.env;
const URL = `${API_URL}/complexSearch?addRecipeInformation=true&number=100&apiKey=${API_KEY}`;

module.exports = async () => {
  // Traigo (si hay) todas las diets de la BDD
  const existingDiets = await Diet.findAll({
    attributes: ["name"],
  });
  // Si las dietas ya fueron cargadas, las retorno
  if (existingDiets.length) return existingDiets.map((diet) => diet.name);

  // Si no, hago una petición a la api externa
  let dietsList = [];

  const { results } = (await axios(URL)).data;

  // Desestructuro diets de cada recipe traída de la API y en cada iteración
  // combino el contenido de dietsList con las diets que voy obteniendo
  results.forEach((recipe) => {
    const { diets } = recipe;

    // Para listar las dietas, y luego renderizarlas en el front
    // incluyo vegetarian de esta forma, pero a la hora de
    // renderizar las recipes la incluyo dinámicamente
    dietsList = [...dietsList, ...diets, "vegetarian"];
  });

  // Creo un set a partir de dietsList para eliminar duplicados
  // Con el spread operator vuelvo a convertir el resultado a un array
  const uniqueDietsList = [...new Set(dietsList)];

  // Creo las diets
  await Diet.bulkCreate(
    uniqueDietsList.map((diet) => ({ name: diet })),
    { ignoreDuplicates: true }
  );

  // Busco las diets de la BDD
  const foundDiets = await Diet.findAll({
    attributes: ["name"],
  });

  // Retorno las diets en un array
  return foundDiets.map((diet) => diet.name);
};
