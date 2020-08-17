'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employees_workeroperatorassignments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      effectivedatetime: {
        type: Sequelize.DATE
      },
      expirationdatetime: {
        type: Sequelize.DATE
      },
      statuscode: {
        type: Sequelize.STRING
      },
      operator_id: {
        type: Sequelize.INTEGER,
        references: { model: 'employees_operators', key: 'id'}
      },
      worker_id: {
        type: Sequelize.INTEGER,
        references: { model: 'basics_workers', key: 'id'}
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
    return queryInterface.dropTable('employees_workeroperatorassignments');
  }
};