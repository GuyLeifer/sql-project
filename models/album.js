'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Album, {
        foreignKey: 'albumId'
      });
      this.hasMany(models.Song, {
        foreignKey: 'songId',
        as: 'songs'   
      })
    }
  };
  Album.init({
    Name: DataTypes.STRING,
    Artist_id: DataTypes.INTEGER,
    Cover_img: DataTypes.STRING,
    Created_at: DataTypes.DATEONLY,
    Upload_at: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};