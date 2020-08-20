'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employees_operatorresourceaccesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      readaccesslevelcode: {
        type: Sequelize.STRING
      },
      writeaccesslevelcode: {
        type: Sequelize.STRING
      },
      operator_id: {
        type: Sequelize.INTEGER,
        references: { model: 'employees_operators', key: 'id'}
      },
      resource_id: {
        type: Sequelize.INTEGER,
        references: { model: 'employees_resources', key: 'id'}
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
    return queryInterface.dropTable('employees_operatorresourceaccesses');
  }
};