'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employees_postalcodereferences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postalcode: {
        type: Sequelize.STRING
      },
      postalcodedescription: {
        type: Sequelize.TEXT
      },
      postalcodeextension: {
        type: Sequelize.STRING
      },
      country_id: {
        type: Sequelize.INTEGER,
        references: { model: 'basics_countries', key: 'id'}
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
    return queryInterface.dropTable('employees_postalcodereferences');
  }
};