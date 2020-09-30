'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class interaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User);
      this.belongsTo(models.Song);
    }
  };
  interaction.init({
    UsernameId: DataTypes.INTEGER,
    SongId: DataTypes.INTEGER,
    is_liked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'interaction',
    paranoid: true,
  });
  return interaction;
};