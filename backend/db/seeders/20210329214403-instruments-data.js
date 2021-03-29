'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Instruments', [
        { name: 'Banjo' },
        { name: 'Bassoon' },
        { name: 'Bass guitar' },
        { name: 'Cello' },
        { name: 'Couble bass'},
        { name: 'Clarinet'},
        { name: 'Drum kit'},
        { name: 'Fiddle'},
        { name: 'Flute'},
        { name: 'French horn'},
        { name: 'Guitar'},
        { name: 'Lute'},
        { name: 'Mandolin'},
        { name: 'Marimba'},
        { name: 'Oboe'},
        { name: 'Organ'},
        { name: 'Piano'},
        { name: 'Saxophone'},
        { name: 'Trombone'},
        { name: 'Trumpet'},
        { name: 'Tuba'},
        { name: 'Ukulele'},
        { name: 'Violin'},
        { name: 'Viola'},
        { name: 'Xylophone'},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Instruments', null, {});
  }
};
