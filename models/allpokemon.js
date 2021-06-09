'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class allpokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.allpokemon.belongsToMany(models.allplace, { through:'allplaces_allpokemons'})
    }
  };
  allpokemon.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'allpokemon',
  });
  return allpokemon;
};