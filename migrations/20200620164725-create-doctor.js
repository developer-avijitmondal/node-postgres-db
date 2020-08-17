'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('doctor_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctortypename: {
        type: Sequelize.INTEGER
      },
      doctordescription: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      effective_date: {
        type: Sequelize.DATE
      },
      expiry_date: {
        type: Sequelize.DATE
      },
      createdby: {
        type: Sequelize.STRING
      },
      updatedby: {
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
      return queryInterface.createTable('basics_doctors', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        patryroleassignmentid: {
          type: Sequelize.INTEGER,
          references: { model: 'basics_partyroleassignments', key: 'id'}
        },
        doctortype: {
          type: Sequelize.INTEGER,
          references: { model: 'doctor_types', key: 'id'}
        },
        status: {
          type: Sequelize.STRING
        },
        effective_date: {
          type: Sequelize.DATE
        },
        expiry_date: {
          type: Sequelize.DATE
        },
        createdby: {
          type: Sequelize.STRING
        },
        updateby: {
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
      return queryInterface.createTable('doctor_pharmacies', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        doctorid: {
          type: Sequelize.INTEGER,
          references: { model: 'basics_doctors', key: 'id'}
        },
        pharmacyid: {
          type: Sequelize.INTEGER
        },
        status: {
          type: Sequelize.STRING
        },
        effective_date: {
          type: Sequelize.DATE
        },
        expiry_date: {
          type: Sequelize.DATE
        },
        createdby: {
          type: Sequelize.STRING
        },
        updatedby: {
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
      return queryInterface.createTable('doctor_labs', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        doctorid: {
          type: Sequelize.INTEGER,
          references: { model: 'basics_doctors', key: 'id'}
        },
        labid: {
          type: Sequelize.INTEGER
        },
        status: {
          type: Sequelize.STRING
        },
        effective_date: {
          type: Sequelize.DATE
        },
        expiry_date: {
          type: Sequelize.DATE
        },
        createdby: {
          type: Sequelize.STRING
        },
        updatedby: {
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
      return queryInterface.createTable('doctor_nurshings', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        doctorid: {
          type: Sequelize.INTEGER,
          references: { model: 'basics_doctors', key: 'id'}
        },
        nurshingid: {
          type: Sequelize.INTEGER
        },
        status: {
          type: Sequelize.STRING
        },
        effective_date: {
          type: Sequelize.DATE
        },
        expiry_date: {
          type: Sequelize.DATE
        },
        createdby: {
          type: Sequelize.STRING
        },
        updatedby: {
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
      return queryInterface.createTable('doctor_photos', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        doctorid: {
          type: Sequelize.INTEGER,
          references: { model: 'basics_doctors', key: 'id'}
        },
        image_name: {
          type: Sequelize.STRING
        },
        meta_titile: {
          type: Sequelize.STRING
        },
        meta_description: {
          type: Sequelize.STRING
        },
        folder_location: {
          type: Sequelize.STRING
        },
        alt_tag: {
          type: Sequelize.STRING
        },
        title_tag: {
          type: Sequelize.STRING
        },
        cover_image: {
          type: Sequelize.STRING
        },
        position: {
          type: Sequelize.STRING
        },
        status: {
          type: Sequelize.STRING
        },
        effective_date: {
          type: Sequelize.DATE
        },
        expiry_date: {
          type: Sequelize.DATE
        },
        createdby: {
          type: Sequelize.STRING
        },
        updatedby: {
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
        return queryInterface.createTable('basic_awards', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          awardname: {
            type: Sequelize.STRING
          },
          description: {
            type: Sequelize.STRING
          },
          authorisedbody: {
            type: Sequelize.STRING
          },
          status: {
            type: Sequelize.STRING
          },
          effective_date: {
            type: Sequelize.DATE
          },
          expiry_date: {
            type: Sequelize.DATE
          },
          createdby: {
            type: Sequelize.STRING
          },
          updatedby: {
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
        return queryInterface.createTable('doctor_awards', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          doctorid: {
            type: Sequelize.INTEGER,
            references: { model: 'basics_doctors', key: 'id'}
          },
          awardid: {
            type: Sequelize.INTEGER,
            references: { model: 'basic_awards', key: 'id'}
          },
          dateofaward: {
            type: Sequelize.DATE
          },
          imageurl: {
            type: Sequelize.STRING
          },
          title: {
            type: Sequelize.STRING
          },
          status: {
            type: Sequelize.STRING
          },
          effective_date: {
            type: Sequelize.DATE
          },
          expiry_date: {
            type: Sequelize.DATE
          },
          createdby: {
            type: Sequelize.STRING
          },
          updatedby: {
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
        return queryInterface.createTable('basic_practises', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          practisename: {
            type: Sequelize.STRING
          },
          description: {
            type: Sequelize.STRING
          },
          status: {
            type: Sequelize.STRING
          },
          effective_date: {
            type: Sequelize.DATE
          },
          expiry_date: {
            type: Sequelize.DATE
          },
          createdby: {
            type: Sequelize.STRING
          },
          updatedby: {
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
        return queryInterface.createTable('basic_licenses', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          licensename: {
            type: Sequelize.STRING
          },
          description: {
            type: Sequelize.STRING
          },
          status: {
            type: Sequelize.STRING
          },
          effective_date: {
            type: Sequelize.DATE
          },
          expiry_date: {
            type: Sequelize.DATE
          },
          createdby: {
            type: Sequelize.STRING
          },
          updatedby: {
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
        return queryInterface.createTable('doctor_practises', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          doctorid: {
            type: Sequelize.INTEGER,
            references: { model: 'basics_doctors', key: 'id'}
          },
          pracitceid: {
            type: Sequelize.INTEGER,
            references: { model: 'basic_practises', key: 'id'}
          },
          status: {
            type: Sequelize.STRING
          },
          effective_date: {
            type: Sequelize.DATE
          },
          expiry_date: {
            type: Sequelize.DATE
          },
          createdby: {
            type: Sequelize.STRING
          },
          updatedby: {
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
        return queryInterface.createTable('doctor_licenses', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          doctorid: {
            type: Sequelize.INTEGER,
            references: { model: 'basics_doctors', key: 'id'}

          },
          licenseid: {
            type: Sequelize.INTEGER,
            references: { model: 'basic_licenses', key: 'id'}
          
          },
          status: {
            type: Sequelize.STRING
          },
          effective_date: {
            type: Sequelize.DATE
          },
          expiry_date: {
            type: Sequelize.DATE
          },
          createdby: {
            type: Sequelize.STRING
          },
          updatedby: {
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
          return queryInterface.createTable('basic_services', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            servicename: {
              type: Sequelize.STRING
            },
            description: {
              type: Sequelize.STRING
            },
            status: {
              type: Sequelize.STRING
            },
            effictive_date: {
              type: Sequelize.DATE
            },
            expiry_date: {
              type: Sequelize.DATE
            },
            createdby: {
              type: Sequelize.STRING
            },
            updatedby: {
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
          return queryInterface.createTable('doctor_services', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            doctorid: {
              type: Sequelize.INTEGER,
              references: { model: 'basics_doctors', key: 'id'}

            },
            service_id: {
              type: Sequelize.INTEGER,
              references: { model: 'basic_services', key: 'id'}
            },
            status: {
              type: Sequelize.STRING
            },
            effictive_date: {
              type: Sequelize.DATE
            },
            expiry_date: {
              type: Sequelize.DATE
            },
            createdby: {
              type: Sequelize.STRING
            },
            updatedby: {
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
          return queryInterface.createTable('time_periods', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            name: {
              type: Sequelize.STRING
            },
            days_of_week: {
              type: Sequelize.STRING
            },
            start_time: {
              type: Sequelize.TIME
            },
            duration_unit_of_measurement: {
              type: Sequelize.STRING
            },
            duration: {
              type: Sequelize.STRING
            },
            status: {
              type: Sequelize.STRING
            },
            effictive_date: {
              type: Sequelize.DATE
            },
            expiry_date: {
              type: Sequelize.DATE
            },
            createdby: {
              type: Sequelize.STRING
            },
            updatedby: {
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
          return queryInterface.createTable('time_groups', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            description: {
              type: Sequelize.STRING
            },
            status: {
              type: Sequelize.STRING
            },
            effictive_date: {
              type: Sequelize.DATE
            },
            expiry_date: {
              type: Sequelize.DATE
            },
            createdby: {
              type: Sequelize.STRING
            },
            updatedby: {
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
          return queryInterface.createTable('timegroup_timeperiods', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            time_period_id: {
              type: Sequelize.INTEGER,
              references: { model: 'time_periods', key: 'id'}
              },
            time_group_id: {
              type: Sequelize.INTEGER,
              references: { model: 'time_groups', key: 'id'}
            },
            status: {
              type: Sequelize.STRING
            },
            effictive_date: {
              type: Sequelize.DATE
            },
            expiry_date: {
              type: Sequelize.DATE
            },
            createdby: {
              type: Sequelize.STRING
            },
            updatedby: {
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
          return queryInterface.createTable('basic_locations', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            location_name: {
              type: Sequelize.STRING
            },
            location_details: {
              type: Sequelize.STRING
            },
            status: {
              type: Sequelize.STRING
            },
            effictive_date: {
              type: Sequelize.DATE
            },
            expiry_date: {
              type: Sequelize.DATE
            },
            createdby: {
              type: Sequelize.STRING
            },
            updatedby: {
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
          return queryInterface.createTable('doctor_availabilities', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            doctorid: {
              type: Sequelize.INTEGER,
              references: { model: 'basics_doctors', key: 'id'}
            },
            time_group_time_period_id: {
              type: Sequelize.INTEGER,
              references: { model: 'timegroup_timeperiods', key: 'id'}
            },
            location_id: {
              type: Sequelize.INTEGER,
              references: { model: 'basic_locations', key: 'id'}
            },
            status: {
              type: Sequelize.STRING
            },
            effictive_date: {
              type: Sequelize.DATE
            },
            expiry_date: {
              type: Sequelize.DATE
            },
            createdby: {
              type: Sequelize.STRING
            },
            updatedby: {
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
          return queryInterface.createTable('basic_specalities', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            specality_name: {
              type: Sequelize.STRING
            },
            specality_description: {
              type: Sequelize.STRING
            },
            status: {
              type: Sequelize.STRING
            },
            effictive_date: {
              type: Sequelize.DATE
            },
            expiry_date: {
              type: Sequelize.DATE
            },
            createdby: {
              type: Sequelize.STRING
            },
            updatedby: {
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
          return queryInterface.createTable('doctor_specalities', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            doctorid: {
              type: Sequelize.INTEGER,
              references: { model: 'basics_doctors', key: 'id'}

            },
            specality_id: {
              type: Sequelize.INTEGER,
              references: { model: 'basic_specalities', key: 'id'}
            },
            status: {
              type: Sequelize.STRING
            },
            effictive_date: {
              type: Sequelize.DATE
            },
            expiry_date: {
              type: Sequelize.DATE
            },
            createdby: {
              type: Sequelize.STRING
            },
            updatedby: {
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
          return queryInterface.createTable('basic_colleges', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            college_name: {
              type: Sequelize.STRING
            },
            status: {
              type: Sequelize.STRING
            },
            effictive_date: {
              type: Sequelize.DATE
            },
            expiry_date: {
              type: Sequelize.DATE
            },
            createdby: {
              type: Sequelize.STRING
            },
            updatedby: {
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
            return queryInterface.createTable('qualifications', {
              id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
              },
              doctorid: {
                type: Sequelize.INTEGER,
                references: { model: 'basics_doctors', key: 'id'}
              },
              qualifiation: {
                type: Sequelize.STRING,
             
              },
              college_id: {
                type: Sequelize.INTEGER,
                references: { model: 'basic_colleges', key: 'id'}

              },
              status: {
                type: Sequelize.STRING
              },
              effictive_date: {
                type: Sequelize.DATE
              },
              expiry_date: {
                type: Sequelize.DATE
              },
              createdby: {
                type: Sequelize.STRING
              },
              updatedby: {
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
          })
          
        })
      })
    })

  },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.dropTable('franchises_departments');
//   }
};