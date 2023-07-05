const { Diet, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Diet model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Diet.sync({ force: true }));
    describe('name', () => {
      it('Should throw an error if name is null', (done) => {
        Diet.create({})
          .then(() => done(new Error('It should have thrown a validation error')))
          .catch((error) => {
            expect(error.name).to.equal('SequelizeValidationError');
            done();
          });
      });
      it('should throw an error if name is not unique', (done) => {
        Diet.create({ name: 'Vegetarian' })
          .then(() => {
            return Diet.create({ name: 'Vegetarian' })
              .then(() => done(new Error('It should have thrown a unique constraint error')))
              .catch((error) => {
                expect(error.name).to.equal('SequelizeUniqueConstraintError');
                done();
              });
          })
          .catch((error) => done(error));
      });
      it('Should work when its a valid name', async () => {
        const dietName = 'Vegetarian';
        try {
          const createdDiet = await Diet.create({ name: dietName });
          expect(createdDiet.name).to.equal(dietName);
        } catch (error) {
          throw new Error('It should have created a valid diet');
        }
      });
    });
  });
});
