'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('allplaces', 'kanji', {
        type: Sequelize.STRING,
        allowNull: true,
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('allplaces', 'kanji')])
  }
};
