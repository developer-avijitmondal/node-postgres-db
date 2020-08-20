'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('permissions_groupsourceaccesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      groupreadaccesslevelflag: {
        type: Sequelize.STRING
      },
      groupwriteaccesslevelflag: {
        type: Sequelize.STRING
      },
      resource_id: {
        type: Sequelize.INTEGER,
        references: { model: 'employees_resources', key: 'id'}
      },
      workgroup_id: {
        type: Sequelize.INTEGER,
        references: { model: 'permissions_workgroups', key: 'id'}
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
    return queryInterface.dropTable('permissions_groupsourceaccesses');
  }
};