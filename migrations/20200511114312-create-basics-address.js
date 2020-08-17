'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('basics_addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      addressline1: {
        type: Sequelize.STRING
      },
      addressline2: {
        type: Sequelize.STRING
      },
      addressline3: {
        type: Sequelize.STRING
      },
      addressline4: {
        type: Sequelize.STRING
      },
      postalcodereference_id: {
        type: Sequelize.INTEGER,
        references: { model: 'employees_postalcodereferences', key: 'id'}
      },
      state_id: {
        type: Sequelize.INTEGER,
        references: { model: 'basics_states', key: 'id'}
      },
      contactperson: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      city: {
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
    return queryInterface.dropTable('employees_addresses');
  }
};