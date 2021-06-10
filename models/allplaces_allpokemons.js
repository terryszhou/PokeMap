'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class allplaces_allpokemons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  allplaces_allpokemons.init({
    allplaceId: DataTypes.INTEGER,
    allpokemonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'allplaces_allpokemons',
  });
  return allplaces_allpokemons;
};