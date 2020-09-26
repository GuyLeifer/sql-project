'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Title: {
        type: Sequelize.STRING
      },
      ArtistId: {
        type: Sequelize.INTEGER
      },
      AlbumId: {
        type: Sequelize.INTEGER
      },
      YouTube_Link: {
        type: Sequelize.STRING
      },
      Length: {
        type: Sequelize.STRING
      },
      Track_Number: {
        type: Sequelize.INTEGER
      },
      Lyrics: {
        type: Sequelize.STRING(8000)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Songs');
  }
};