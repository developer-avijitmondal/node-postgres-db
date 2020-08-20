'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('basics_partyroleassignments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      effectivedate: {
        type: Sequelize.DATE
      },
      expirationdate: {
        type: Sequelize.DATE
      },
      createby: {
        type: Sequelize.INTEGER
      },
      updateby: {
        type: Sequelize.INTEGER
      },
      party_id: {
        type: Sequelize.INTEGER,
        references: { model: 'basics_parties', key: 'id'}
      },
      partyrole_id: {
        type: Sequelize.INTEGER,
        references: { model: 'basics_partyroles', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      statuscode: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('basics_partyroleassignments');
  }
};