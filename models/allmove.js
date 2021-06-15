'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class allmove extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.allmove.belongsToMany(models.pokemon, {through:'allmoves_pokemons'})
    }
  };
  allmove.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'allmove',
  });
  return allmove;
};