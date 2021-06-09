'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class allplace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.allplace.belongsToMany(models.allpokemon, { through:'allplaces_allpokemons'})
    }
  };
  allplace.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'allplace',
  });
  return allplace;
};