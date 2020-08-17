'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('basic_patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patientscode: {
        type: Sequelize.STRING
      },
      patientsphotograph: {
        type: Sequelize.STRING
      },
      spacialrequirement: {
        type: Sequelize.STRING
      },
      partyroleassigment_id: {
        type: Sequelize.INTEGER,
        references: { model: 'basics_partyroleassignments', key: 'id'}
      },
      status: {
        type: Sequelize.STRING
      },
      effective_date: {
        type: Sequelize.DATE
      },
      expiry_date: {
        type: Sequelize.DATE
      },
      createdby: {
        type: Sequelize.STRING
      },
      updateby: {
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
    return queryInterface.dropTable('basic_patients');
  }
};