'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('pokemons', 'nickname', {
        type: Sequelize.STRING,
        allowNull: true,
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('pokemons', 'nickname')])
  }
};
