'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      Email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      Password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      isAdmin: {
        default: false,
        type: Sequelize.BOOLEAN
      },
      Preferences: {
        type: Sequelize.JSON
      },
      Remember_Token: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};