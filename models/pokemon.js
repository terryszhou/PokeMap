'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.pokemon.belongsToMany(models.allmove, {through:'allmoves_pokemons'})
    }
  };
  pokemon.init({
    name: DataTypes.STRING,
    dexnum: DataTypes.INTEGER,
    nickname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pokemon',
  });
  return pokemon;
};