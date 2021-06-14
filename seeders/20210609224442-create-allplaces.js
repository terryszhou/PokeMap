'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('allplaces', [
      {
        name: 'route 1',
        kanji: '１番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 2',
        kanji: '2番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 3',
        kanji: '3番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 4',
        kanji: '4番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 5',
        kanji: '5番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 6',
        kanji: '6番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 7',
        kanji: '7番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 8',
        kanji: '8番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 9',
        kanji: '9番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 10',
        kanji: '１0番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 11',
        kanji: '１1番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 12',
        kanji: '１2番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 13',
        kanji: '１3番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 14',
        kanji: '１4番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 15',
        kanji: '１5番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 16',
        kanji: '１6番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 17',
        kanji: '１7番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 18',
        kanji: '１8番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 19',
        kanji: '１9番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 20',
        kanji: '20番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 21',
        kanji: '2１番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 22',
        kanji: '22番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 23',
        kanji: '23番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 24',
        kanji: '24番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'route 25',
        kanji: '25番道路',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pallet town',
        flavortext: 'Shades of Your Journey Await!',
        kanji: 'マサラタウン Masara Town',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'viridian city',
        flavortext: 'The City of Evergreen',
        kanji: 'トキワシティ Tokiwa City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pewter city',
        flavortext: 'Between Rugged Mountains',
        kanji: 'ニビシティ Nibi City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cerulean city',
        flavortext: 'The Floral Lagoon City',
        kanji: 'ハナダシティ Hanada City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'vermilion city',
        flavortext: 'The Port of Exquisite Sunsets',
        kanji: 'クチバシティ Kuchiba City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'lavender town',
        flavortext: 'The Noble Town',
        kanji: 'シオンタウン Cion Town',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'celadon city',
        flavortext: 'City of Rainbow Dreams',
        kanji: 'タマムシシティ Tamamushi City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'fuchsia city',
        flavortext:'Happening and Passing City',
        kanji: 'タマムシシティ Tamamushi City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'saffron city',
        flavortext: 'Shining Big City',
        kanji: 'セキチクシティ Sekichiku City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cinnabar island',
        flavortext: 'The Ravaged Town of the Past',
        kanji: 'グレン島 Guren Island',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cerulean cave',
        kanji: 'ハナダの洞窟 Hanada Cave',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'mt moon',
        kanji: 'お月見山 Mt. Otsukimi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'power plant',
        kanji: '無人発電所 Abandoned Power Plant',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'rock tunnel',
        kanji: 'イワヤマトンネル Rock Mountain Tunnel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'victory road',
        kanji: 'チャンピオンロード Champion Road',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'viridian forest',
        kanji: 'トキワの森 Tokiwa Forest',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'seafoam islands',
        kanji: '双子島 Twin Islands',
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
