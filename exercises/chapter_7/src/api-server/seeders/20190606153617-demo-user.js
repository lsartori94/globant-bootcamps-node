'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    
     queryInterface.bulkInsert('Profiles', [{
       name: 'Perfil 1',
       description: 'Algo',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'perfil 2',      
       createdAt: new Date(),
       updatedAt: new Date(),
       description: 'otra descripcion'
     }], {});
    return  queryInterface.bulkInsert('Users', [{
      name: 'Juan',
      password: 'password',
      lastname: 'Perez',
      email: 'jperez@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      ProfileId: 1
    }, {
      name: 'Pablo',
      password: 'Pepepepe',
      lastname: 'Perez',
      email: 'Pablito@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      ProfileId: 2
    }, {
      name: 'Jorge',
      password: 'TeLoResumo',
      lastname: 'AsiNoMas',
      email: 'Jorgito@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      ProfileId: 1
    }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }

};
