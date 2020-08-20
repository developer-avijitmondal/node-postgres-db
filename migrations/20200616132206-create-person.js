'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('maritalsutatus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      maritalstatuscode: {
        type: Sequelize.STRING
     
      },
      maritalstatusdescription: {
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
      return queryInterface.createTable('racecodes', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
         
        },
        racecode: {
          type: Sequelize.STRING
      
        
        },
        racecodedescription: {
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
      return queryInterface.createTable('personalitytypes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        personalitytypecode: {
          type: Sequelize.STRING
  
     
        },
        personalitytypedescription: {
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
      return queryInterface.createTable('lifestyletypecodes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
           type: Sequelize.INTEGER
        },
        lifestyletypecode: {
          type: Sequelize.STRING
        
      
          },
        lifestyletypecodedescription: {
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
      return queryInterface.createTable('personalvaluetypes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        personalvaluetypecode: {
          type: Sequelize.STRING
      
        },
        personalvaluetypedescription: {
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
      return queryInterface.createTable('occupationtypes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        occupationtypecode: {
          type: Sequelize.STRING
  
        },
        occupationtypedescription: {
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
    return queryInterface.createTable('lifestagecodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lifestagecode: {
        type: Sequelize.STRING
          },
      lifestagedescription: {
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
      return queryInterface.createTable('ethnictypes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        ethincitytypecode: {
          type: Sequelize.STRING
        },
        ethincitytypedescription: {
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
      return queryInterface.createTable('educationlevels', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        educationlevelcode: {
          type: Sequelize.STRING
        },
        educationleveldescription: {
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
      return queryInterface.createTable('employmentstatustypes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        employmentstatus: {
          type: Sequelize.STRING
         
        },
        employemntstatusdescription: {
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
      return queryInterface.createTable('valueattitudelifestyletypes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        valueattitudelifestyletypecode: {
          type: Sequelize.STRING
        },
        valueattitudelifestyletypedescription: {
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
      return queryInterface.createTable('dietaryhabittypes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        dietaryhabittypecode: {
          type: Sequelize.STRING
        },
        dietaryhabitname: {
          type: Sequelize.STRING
        },
        dietaryprohibitionnarrative: {
          type: Sequelize.STRING
        },
        dietaryfoodallwoednarrative: {
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
      return queryInterface.createTable('disabilityimpairmenttypes', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        disabilityimpairmenttypecode: {
          type: Sequelize.STRING
         
        },
        disabilityimpairmentdescription: {
          type: Sequelize.STRING
        },
        disabilityimprirmentnarrative: {
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
      return queryInterface.createTable('currencies', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        description: {
          type: Sequelize.STRING
        },
        symbol: {
          type: Sequelize.STRING
        },
        SO4217CurrencyCode: {
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
      return queryInterface.createTable('itucountries', {
        id: {
          unique:true,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        itucountrycode: {
          type: Sequelize.STRING
        },
        itucountryname: {
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
      return queryInterface.createTable('isocountries', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        isocountrycode: {
          type: Sequelize.STRING
        },
        itucountrycode: {
          type: Sequelize.INTEGER,
          references: { model: 'itucountries', key: 'id'}
        },
        countryname: {
          type: Sequelize.STRING
        },
        ISO3166ThreeCharacterCountryCode: {
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
        return queryInterface.createTable('currencytypes', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          isocurrencycode: {
            type: Sequelize.STRING
          },
          isocurrencynumber: {
            type: Sequelize.STRING
          },
          isocurrencyname: {
            type: Sequelize.STRING
          },
          isocuntrycode: {
            type: Sequelize.INTEGER,
            references: { model: 'isocountries', key: 'id'}
          },
          retailerassignedcurrencytypecode: {
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
        return queryInterface.createTable('currencies', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          description: {
            type: Sequelize.STRING
          },
          symbol: {
            type: Sequelize.STRING
          },
          SO4217CurrencyCode: {
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
        return queryInterface.createTable('annualincomeranges', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          annualincoderangecode: {
            type: Sequelize.STRING
          },
          highincomevalue: {
            type: Sequelize.DECIMAL
          },
          lowincomevalue: {
            type: Sequelize.DECIMAL
          },
          currencyid: {
            type: Sequelize.INTEGER,
            references: { model: 'currencies', key: 'id'}
          },
          isocurrencycode: {
            type: Sequelize.INTEGER,
            references: { model: 'currencytypes', key: 'id'}
    
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

        return queryInterface.createTable('languages', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          languageid: {
            type: Sequelize.STRING
          },   
          languagename: {
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
        return queryInterface.createTable('religiontypes', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          religionname: {
            type: Sequelize.STRING
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
        return queryInterface.createTable('basics_people', {
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
          language_id: {
            type: Sequelize.INTEGER,
            references: { model: 'languages', key: 'id'}
          },
          salutation: {
            type: Sequelize.STRING
          },
          firstname: {
            type: Sequelize.STRING
          },
          firstnametype: {
            type: Sequelize.STRING
          },
          middlename: {
            type: Sequelize.STRING
          },
          middelnametype: {
            type: Sequelize.STRING
          },
          lastname: {
            type: Sequelize.STRING
          },
          lastnametype: {
            type: Sequelize.STRING
          },
          suffix: {
            type: Sequelize.STRING
          },
       
          sortingname: {
            type: Sequelize.STRING
          },
          mailingname: {
            type: Sequelize.STRING
          },
          offiicialname: {
            type: Sequelize.STRING
          },
          gendertypecode: {
            type: Sequelize.STRING
          },
          dateofbirth: {
            type: Sequelize.DATE
          },
          maritalstatuscode: {
            type: Sequelize.INTEGER,
            references: { model: 'maritalsutatus', key: 'id'}
          },  
          lifestagecode: {
            type: Sequelize.INTEGER,
            references: { model: 'lifestagecodes', key: 'id'}
          },
          racecode: {
            type: Sequelize.INTEGER,
            references: { model: 'racecodes', key: 'id'}
          },
        ethnicitytypecode: {
            type: Sequelize.INTEGER,
            references: { model: 'ethnictypes', key: 'id'}
          },
          religionfamilycode: {
            type: Sequelize.STRING
          },
          religionname: {
            type: Sequelize.INTEGER,
            references: { model: 'religiontypes', key: 'id'}
          },
         educationlevelcode: {
            type: Sequelize.INTEGER,
            references: { model: 'educationlevels', key: 'id'}
          },
          employemntstatuscode: {
            type: Sequelize.INTEGER,
            references: { model: 'employmentstatustypes', key: 'id'}
          },
          occupationtyepcode: {
            type: Sequelize.INTEGER,
            references: { model: 'occupationtypes', key: 'id'}
          },
          personalitytypecode: {
            type: Sequelize.INTEGER,
            references: { model: 'personalitytypes', key: 'id'}
          },
          personalvaluetypecode: {
            type: Sequelize.INTEGER,
            references: { model: 'personalvaluetypes', key: 'id'}
          },
          valueattitudelifestyletypecode: {
            type: Sequelize.INTEGER,
            references: { model: 'valueattitudelifestyletypes', key: 'id'}
          },
         conusmercreditscore: {
            type: Sequelize.STRING
          },
         dietartyhabittypecode: {
            type: Sequelize.INTEGER,
            references: { model: 'dietaryhabittypes', key: 'id'}
          },
         consumercreditratingservicename: {
            type: Sequelize.STRING
          },
          disailityimplementtypecode: {
            type: Sequelize.INTEGER,
            references: { model: 'disabilityimpairmenttypes', key: 'id'}
          },
          annoualincomerangecode: {
            type: Sequelize.INTEGER,
            references: { model: 'annualincomeranges', key: 'id'}
          },
          lifestyletypecode: {
            type: Sequelize.INTEGER,
            references: { model: 'lifestyletypecodes', key: 'id'}
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

      })
    })

  },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.dropTable('franchises_departments');
//   }
};