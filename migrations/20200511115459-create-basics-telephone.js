'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('basics_telephones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      areacode: {
        type: Sequelize.STRING
      },
      telephonenumber: {
        type: Sequelize.STRING
      },
      extensionnumber: {
        type: Sequelize.STRING
      },
      completenumber: {
        type: Sequelize.STRING
      },
      mobileno: {
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
    return queryInterface.dropTable('basics_telephones');
  }
};