'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Interaction, {
        foreignKey: 'UserId'
      });
    }
  };
  User.init({
    Name: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    Preferences: DataTypes.JSON,
    Remember_Token: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    paranoid: true,
  });
  return User;
};