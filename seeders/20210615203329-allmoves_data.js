'use strict';
const axios = require('axios')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let moveUrl = 'https://pokeapi.co/api/v2/move/?limit=844';
    const APIResponse = await axios.get(moveUrl)
    const mappedResult = APIResponse.data.results.map(x => {
      return {
        name: x.name,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  });
   await queryInterface.bulkInsert('allmoves', mappedResult)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('allmoves', null)
  }
};
