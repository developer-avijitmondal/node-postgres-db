'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('basics_partytypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      partytypecode: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      partytypedescription: {
        type: Sequelize.STRING
      },
      createby: {
        type: Sequelize.INTEGER
      },
      updateby: {
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
    return queryInterface.dropTable('basics_partytypes');
  }
};