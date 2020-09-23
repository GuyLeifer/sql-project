'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.My_playlist_song, {
        foreignKey: 'my_playlist_songId',
        as: 'my_playlist_songs',
      });
    }
  };
  Playlist.init({
    Name: DataTypes.STRING,
    Cover_img: DataTypes.STRING,
    Created_at: DataTypes.DATEONLY,
    Upload_at: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Playlist',
  });
  return Playlist;
};