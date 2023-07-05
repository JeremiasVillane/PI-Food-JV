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

describe("Recipe get routes", function () {
  this.timeout(5000);
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Recipe.sync({ force: true }).then(() => Recipe.create(recipe))
  );
  describe("GET /recipes", () => {
    it("Should get 200", () => agent.get("/recipes").expect(200));
  });
  describe("GET /recipes/:id", () => {
    it("Responds with status: 200", async () => {
      await agent.get("/recipes/782585").expect(200);
    });
    it('Responds with an object with the properties: "id", "title", "image", "healthScore", "diets", "source", "summary" and steps', async () => {
      const response = (await agent.get("/recipes/782585")).body;
      const recipe = response[0];
      expect(recipe).to.have.property("id");
      expect(recipe).to.have.property("title");
      expect(recipe).to.have.property("image");
      expect(recipe).to.have.property("healthScore");
      expect(recipe).to.have.property("diets");
      expect(recipe).to.have.property("source");
      expect(recipe).to.have.property("summary");
      expect(recipe).to.have.property("steps");
    });
    it("If an error ocurrs responds with status: 500", async () => {
      await agent.get("/recipes/78258").expect(500);
    });
  });
});
