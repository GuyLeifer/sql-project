'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interaction extends Model {
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
  Interaction.init({
    UserId: DataTypes.INTEGER,
    SongId: DataTypes.INTEGER,
    is_liked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Interaction',
    paranoid: true,
  });
  return Interaction;
};