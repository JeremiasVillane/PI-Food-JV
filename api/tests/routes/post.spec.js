/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Recipe, conn } = require("../../src/db.js");

const agent = session(app);
const recipe = {
  title: "Roast beef",
  summary: "Roast beef recipe",
};

describe("Recipe post route", function () {
  this.timeout(5000);
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Recipe.sync({ force: true }).then(() => Recipe.create(recipe))
  );
  describe("POST /recipes", () => {
    const recipe1 = {
      title: "Premium Onion Salad",
      summary: "Texto descriptivo",
      healthScore: 10,
      steps: [
        {
          number: 1,
          step: "Cut the onions.",
        },
        {
          number: 2,
          step: "Make the salad.",
        },
      ],
      diets: ["vegetarian", "pescatarian"],
      image: "https://i.postimg.cc/sfQJ0WQD/default.jpg",
    };
  
    it("It should return wathever is posted", async () => {
      const response = await agent.post("/recipes").send(recipe1);
  
      if (response.body.error) {
        throw new Error(response.body.error);
      }
  
      const recipesFromResponse = response.body;
  
      const includesRecipe1 = recipesFromResponse.some((recipe) => {
        return (
          recipe.title === recipe1.title &&
          recipe.summary === recipe1.summary &&
          recipe.healthScore === recipe1.healthScore &&
          JSON.stringify(recipe.steps) === JSON.stringify(recipe1.steps) &&
          JSON.stringify(recipe.diets) === JSON.stringify(recipe1.diets) &&
          recipe.image === recipe1.image
        );
      });
  
      expect(includesRecipe1).to.be.true;
    });
  });
  
});
