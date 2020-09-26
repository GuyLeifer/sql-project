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
      this.belongsTo(models.Artist);
      this.belongsTo(models.Album);
      this.hasMany(models.My_playlist_song, {
        foreignKey: 'SongId'
      });
    }
  };
  Song.init({
    Title: DataTypes.STRING,
    ArtistId: DataTypes.INTEGER,
    AlbumId: DataTypes.INTEGER,
    YouTube_Link: DataTypes.STRING,
    Length: DataTypes.STRING,
    Track_Number: DataTypes.INTEGER,
    Lyrics: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};