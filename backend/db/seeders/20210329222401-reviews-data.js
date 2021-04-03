'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        {
          userId: 1,
          venueId: 1,
          title: 'Wonderful music',
          body: 'I loved it',
          rating: 10,
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
