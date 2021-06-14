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
        flavortext: 'Shades of Your Journey Await!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'viridian city',
        flavortext: 'The City of Evergreen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pewter city',
        flavortext: 'Between Rugged Mountains',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cerulean city',
        flavortext: 'The Floral Lagoon City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'vermilion city',
        flavortext: 'The Port of Exquisite Sunsets',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'lavender town',
        flavortext: 'The Noble Town',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'celadon city',
        flavortext: 'City of Rainbow Dreams',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'fuchsia city',
        flavortext:'Happening and Passing City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'saffron city',
        flavortext: 'Shining Big City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cinnabar island',
        flavortext: 'The Ravaged Town of the Past',
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
      },
      {
        name: 'seafoam islands',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'special event',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('allplaces', null)
  }
};
