'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Artist, {
        foreignKey: 'artistId'
      });
      this.belongsTo(models.Album, {
        foreignKey: 'albumId'
      });
    }
  };
  Song.init({
    Title: DataTypes.STRING,
    Artist_id: DataTypes.INTEGER,
    Album_id: DataTypes.INTEGER,
    YouTube_Link: DataTypes.STRING,
    Length: DataTypes.STRING,
    Track_Number: DataTypes.INTEGER,
    Lyrics: DataTypes.STRING,
    Created_at: DataTypes.DATEONLY,
    Upload_at: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};