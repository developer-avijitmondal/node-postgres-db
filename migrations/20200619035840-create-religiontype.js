'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('religiontypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
     
        type: Sequelize.INTEGER
      },
      religionname: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      religionfamilycode: {
        type: Sequelize.STRING
      },
      religiondescription: {
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
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('religiontypes');
  }
};