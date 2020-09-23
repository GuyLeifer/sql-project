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
        foreignKey: 'artistId',
        as: 'songs',
      });
      this.hasMany(models.Album, {
        foreignKey: 'albumId',
        as: 'albums',
      });
    }
  };
  Artist.init({
    Name: DataTypes.STRING,
    Cover_img: DataTypes.STRING,
    Created_at: DataTypes.DATEONLY,
    Upload_at: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};