'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('legalstatustypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      legalstatuscode: {
        type: Sequelize.STRING,
        
       
      },
      legalstatusdescription: {
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
    }).then(function(){
      return queryInterface.createTable('legalorganizationtypes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        legalorganizationcodecode: {
          type: Sequelize.STRING,
          
    
        },
        legalorganizationtypedescription: {
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
    }).then(function(){
      return queryInterface.createTable('businessactivityreferences', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        businessactivitycode: {
          type: Sequelize.STRING,
          
        
        },
        businessacitvitycodedescription: {
          type: Sequelize.STRING
        },
        issuingagencyname: {
          type: Sequelize.STRING
        },
        businessactivitycodelistname: {
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


    }).then(function(){
      return queryInterface.createTable('globalbusinesstypes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        globalbusinesssizetypecode: {
          type: Sequelize.STRING,
          
        
        },
        globalbusinesssizetypedescription: {
          type: Sequelize.STRING
        },
        lowemployeecountglobal: {
          type: Sequelize.INTEGER
        },
        highemployeecountglobal: {
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
    }).then(function(){
      return queryInterface.createTable('religiontypes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        religionname: {
          type: Sequelize.STRING,
         
      
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
    }).then(function(){
      return queryInterface.createTable('basics_organizations', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        party_id: {
          type: Sequelize.INTEGER,
          references: { model: 'basics_parties', key: 'id'}
        },
        legalstatuscode: {
          type: Sequelize.INTEGER,
          references: { model: 'legalstatustypes', key: 'id'}
        },
        legalname: {
          type: Sequelize.STRING
        },
        tradename: {
          type: Sequelize.STRING
        },
        terminationdate: {
          type: Sequelize.DATE
        },
        jurisdictionofincorporation: {
          type: Sequelize.STRING
        },
        incorporationdate: {
          type: Sequelize.DATE
        },
        legalorganationtypecode: {
          type: Sequelize.INTEGER,
          references: { model: 'legalorganizationtypes', key: 'id'}
        },
        fiscalyearenddate: {
          type: Sequelize.DATE
        },
        businessactivitycode: {
          type: Sequelize.INTEGER,
          references: { model: 'businessactivityreferences', key: 'id'}
        },
        globalannoualrevenueamount: {
          type: Sequelize.DOUBLE
        },
        globalannoualrevenueamount: {
          type: Sequelize.DECIMAL
        },
        openforbusinessdate: {
          type: Sequelize.DATE
        },
        closedforbusinessdate: {
          type: Sequelize.DATE
        },
        dunsnumber: {
          type: Sequelize.INTEGER
        },
        bankruptcydate: {
          type: Sequelize.DATE
        },
        bankruptcyemergencedate: {
          type: Sequelize.DATE
        },
        bankruptcytypecode: {
          type: Sequelize.STRING
        },
        employeecountlocal: {
          type: Sequelize.INTEGER
        },
        employeecountglobal: {
          type: Sequelize.INTEGER
        },
        dunnandbradstreetrating: {
          type: Sequelize.STRING
        },
        primarybusiness: {
          type: Sequelize.STRING
        },
        organationdescriptionnarrative: {
          type: Sequelize.STRING
        },
        globalbusinesstypecode: {
          type: Sequelize.INTEGER,
          references: { model: 'globalbusinesstypes', key: 'id'}
        },
        religionname: {
          type: Sequelize.INTEGER,
          references: { model:'religiontypes', key: 'id'}
        },
        religionfamilycode: {
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
      });})
    

  },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.dropTable('franchises_departments');
//   }
};