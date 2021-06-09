'use strict';
const axios = require('axios')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/?limit=151';
    const APIResponse = await axios.get(pokemonUrl)
    const mappedResult = APIResponse.data.results.map(x => {
      return {
        name: x.name,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  });
   await queryInterface.bulkInsert('allpokemons', mappedResult)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('allpokemons', null)
  }
};
