const { Recipe, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Recipe model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe("Create recipe", () => {
      it("Should throw an error if the recipe is null", (done) => {
        Recipe.create({})
          .then(() =>
            done(new Error("It should have thrown a validation error"))
          )
          .catch((error) => {
            expect(error.name).to.equal("SequelizeValidationError");
            done();
          });
      });
      it("Should throw an error if the recipe title is null", (done) => {
        Recipe.create({summary: "Summary"})
          .then(() =>
            done(new Error("It should have thrown a validation error"))
          )
          .catch((error) => {
            expect(error.name).to.equal("SequelizeValidationError");
            done();
          });
      });
      it("Should throw an error if the recipe summary is null", (done) => {
        Recipe.create({title: "My recipe"})
          .then(() =>
            done(new Error("It should have thrown a validation error"))
          )
          .catch((error) => {
            expect(error.name).to.equal("SequelizeValidationError");
            done();
          });
      });
      it("Should work when its a valid recipe", async () => {
        try {
          const newRecipe = {
            title: "Roast beef",
            summary: "Roast beef recipe",
          };
          const createdRecipe = await Recipe.create(newRecipe);
          expect(createdRecipe.title).to.equal(newRecipe.title);
          expect(createdRecipe.summary).to.equal(newRecipe.summary);
        } catch (error) {
          throw new Error("It should have created a valid recipe");
        }
      });
    });
  });
});
