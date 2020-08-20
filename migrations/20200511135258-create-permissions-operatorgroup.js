'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('permissions_operatorgroups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      operator_id: {
        type: Sequelize.INTEGER,
        references: { model: 'employees_operators', key: 'id'}
      },
      workgroup_id: {
        type: Sequelize.INTEGER,
        references: { model: 'permissions_workgroups', key: 'id'}
      },
      statuscode: {
        type: Sequelize.STRING
      },
      createby: {
        type: Sequelize.INTEGER
      },
      updateat: {
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
    return queryInterface.dropTable('permissions_operatorgroups');
  }
};