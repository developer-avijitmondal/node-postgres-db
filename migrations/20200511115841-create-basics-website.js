'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('basics_websites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      homepageurlname: {
        type: Sequelize.STRING
      },
      websitebusinessname: {
        type: Sequelize.STRING
      },
      websitetitletagvalue: {
        type: Sequelize.STRING
      },
      websitemetadescriptiontagvalue: {
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
    return queryInterface.dropTable('basics_websites');
  }
};