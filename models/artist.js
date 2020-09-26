'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Song, {
        foreignKey: 'ArtistId'
      });
      this.hasMany(models.Album, {
        foreignKey: 'ArtistId'
      });
    }
  };
  Artist.init({
    Name: DataTypes.STRING,
    Cover_img: DataTypes.STRING(8000),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Artist',
    paranoid: true
  });
  return Artist;
};