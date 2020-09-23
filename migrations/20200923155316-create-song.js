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
      Artist_id: {
        type: Sequelize.INTEGER
      },
      Album_id: {
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
      Created_at: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      Upload_at: {
        allowNull: false,
        type: Sequelize.DATEONLY
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Songs');
  }
};