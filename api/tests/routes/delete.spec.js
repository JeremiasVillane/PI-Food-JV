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

describe("Recipe delete route", function () {
  this.timeout(5000);
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Recipe.sync({ force: true }).then(() => Recipe.create(recipe))
  );
  describe("DELETE /recipes/:id", () => {
    const recipe1 = {
      id: "cb025c8f-5481-4bd8-90ab-00dfc6520365",
      title: "Premium Onion Salad",
      summary: "Texto descriptivo",
    };
    const recipe2 = {
      id: "cb025c8f-5481-4bd8-90ab-00dfc6520366",
      title: "Roasted Chicken",
      summary: "Texto descriptivo dos",
    };
    it("In case there is no recipe with the ID sent, it responds with the message 'No recipe found'", async () => {
      const response = await agent.delete(
        "/recipes/cb025c8f-5481-4bd8-90ab-00dfc6520364"
      );
      expect(response.body).to.deep.equal({ error: "No recipe found" });
    });
    it("When a valid ID is sent, it successfully removes the recipe and responds with 'Recipe successfully removed'", async () => {
      const createdRecipe = await Recipe.create(recipe1);
      const response = await agent.delete(
        `/recipes/${createdRecipe.id}`
      );
      expect(response.body).to.deep.equal({ message: "Recipe successfully removed" });
      const deletedRecipe = await Recipe.findByPk(createdRecipe.id);
      expect(deletedRecipe).to.be.null;
    });
  });
});
