'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('basic_colleges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      college_name: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      effictive_date: {
        type: Sequelize.DATE
      },
      expiry_date: {
        type: Sequelize.DATE
      },
      createdby: {
        type: Sequelize.STRING
      },
      updatedby: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('basic_colleges');
  }
};