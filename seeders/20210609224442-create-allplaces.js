'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('allplaces', [
      {
        name: 'route 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 10',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 11',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 12',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 13',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 14',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 15',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 16',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 17',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 18',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 19',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 20',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 21',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 22',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 23',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 24',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 25',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pallet town',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'viridian city',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pewter city',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cerulean city',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'vermilion city',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'lavender town',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'celadon city',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'fuchsia city',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'saffron city',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cinnabar island',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cerulean cave',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'mt moon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'power plant',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'rock tunnel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'victory road',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'viridian forest',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('allplaces', null)
  }
};
