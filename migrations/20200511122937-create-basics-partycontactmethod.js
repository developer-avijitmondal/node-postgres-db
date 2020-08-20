'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('basics_partycontactmethods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      effectivedatatime: {
        type: Sequelize.DATE
      },
      expirationdatetime: {
        type: Sequelize.DATE
      },
      address_id: {
        type: Sequelize.INTEGER,
        references: { model: 'basics_addresses', key: 'id'}
      },
      contactmethodtype_id: {
        type: Sequelize.INTEGER,
        references: { model: 'basics_contactmethodtypes', key: 'id'}
      },
      contactperposetype_id: {
        type: Sequelize.INTEGER,
        references: { model: 'basics_contactpurposetypes', key: 'id'}
      },
      emailaddress_id: {
        type: Sequelize.INTEGER,
        references: { model: 'basics_emailaddresses', key: 'id'}
      },
      partyroleassigment_id: {
        type: Sequelize.INTEGER,
        references: { model: 'basics_partyroleassignments', key: 'id'}
      },
      telephone_id: {
        type: Sequelize.INTEGER,
        references: { model: 'basics_telephones', key: 'id'}
      },
      website_id: {
        type: Sequelize.INTEGER,
        references: { model: 'basics_websites', key: 'id'}
      },
      contact_id: {
        type: Sequelize.INTEGER,
        references: { model: 'basics_contacts', key: 'id'}
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
    return queryInterface.dropTable('basics_partycontactmethods');
  }
};