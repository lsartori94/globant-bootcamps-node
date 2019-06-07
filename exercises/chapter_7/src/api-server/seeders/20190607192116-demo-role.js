'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Roles', [{
        name: 'Un rol',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Otro rol',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'El primer rol pero con otro nombre',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'El ultimo rol',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Roles', null, {});
  }
};
