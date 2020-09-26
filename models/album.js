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
      this.belongsTo(models.Artist);
      this.hasMany(models.Song, {
        foreignKey: 'AlbumId' 
      })
    }
  };
  Album.init({
    Name: DataTypes.STRING,
    ArtistId: DataTypes.INTEGER,
    Cover_img: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};
