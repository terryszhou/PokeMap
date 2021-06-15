'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class allmoves_pokemons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  allmoves_pokemons.init({
    pokemonId: DataTypes.INTEGER,
    moveId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'allmoves_pokemons',
  });
  return allmoves_pokemons;
};