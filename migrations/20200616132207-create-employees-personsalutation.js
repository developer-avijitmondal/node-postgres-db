'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employees_personsalutations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      relativeordernumber: {
        type: Sequelize.STRING
      },
      person_id: {
        type: Sequelize.INTEGER,
        references: { model: 'basics_people', key: 'id'}
      },
      salutation_id: {
        type: Sequelize.INTEGER,
        references: { model: 'employees_salutations', key: 'id'}
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
    return queryInterface.dropTable('employees_personsalutations');
  }
};