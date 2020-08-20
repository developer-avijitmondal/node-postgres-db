'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('basics_workers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      workertypecode: {
        type: Sequelize.STRING
      },
      workerphotograph: {
        type: Sequelize.STRING
      },
      specialrequirement: {
        type: Sequelize.STRING
      },
      createdby: {
        type: Sequelize.INTEGER
      },
      updatedby: {
        type: Sequelize.INTEGER
      },
      partyroleassignment_id: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('basics_workers');
  }
};