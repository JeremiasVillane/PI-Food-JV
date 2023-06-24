require("dotenv").config();
const axios = require("axios");
const { Diet } = require("../db.js");
const { API_KEY, API_URL } = process.env;
const URL = `${API_URL}/complexSearch?addRecipeInformation=true&number=100&apiKey=${API_KEY}`;

module.exports = async () => {
  let dietsList = [];

  const response = await axios(URL);
  const { results } = response.data;

  // Desestructuro diets de cada recipe traída de la API
  // y en cada iteración combino el contenido de dietsList con las diets que voy obteniendo
  results.forEach((recipe) => {
    const { diets } = recipe;

    // Para listar las dietas, y luego renderizarlas en el front
    // incluyo vegetarian de esta forma, pero a la hora de
    // renderizar las recipes la incluyo dinámicamente
    dietsList = [...dietsList, ...diets, "vegetarian"];
  });

  // Creo un set a partir de dietsList para eliminar duplicados
  // Con el spread operator vuelvo a convertir el resultado a un array 
  // y lo ordeno con sort()
  const uniqueDietsList = [...new Set(dietsList)].sort();

  // Traigo todas las diets de la BDD
  const existingDiets = await Diet.findAll();

  // Filtro las diets de uniqueDietsList que no están presentes en existingDiets
  const dietsToCreate = uniqueDietsList.filter(
    (diet) => !existingDiets.some((existingDiet) => existingDiet.name === diet)
  );

  // Creo solo las diets que no existen en la BDD
  await Diet.bulkCreate(
    dietsToCreate.map((diet) => ({ name: diet })),
    { ignoreDuplicates: true }
  );

  // Busco las diets de la BDD
  const foundDiets = await Diet.findAll({
    attributes: ["name"],
    order: [["name", "ASC"]],
  });

  // Retorno las diets en un array
  return foundDiets.map((diet) => diet.name);
};
