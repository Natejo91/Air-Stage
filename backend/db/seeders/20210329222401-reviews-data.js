'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        {
          userId: 1,
          venueId: 1,
          title: 'Wonderful',
          body: 'I loved it',
          rating: 10,
        },
        {
          userId: 2,
          venueId: 2,
          title: 'Great Place',
          body: 'Fantastic',
          rating: 8,
        },
        {
          userId: 3,
          venueId: 1,
          title: 'Just ok',
          body: 'Venue was average',
          rating: 5,
        },
        {
          userId: 1,
          venueId: 5,
          title: 'Excellent',
          body: 'I loved it',
          rating: 10,
        },
        {
          userId: 2,
          venueId: 2,
          title: 'Just ok',
          body: 'Not the best spot',
          rating: 3,
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
