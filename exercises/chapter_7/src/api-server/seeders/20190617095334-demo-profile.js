'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Profiles", [{
      name: 'name-demo!',
      description: 'description-demo',
      createdAt: '2019-06-11 17:32:46',
      updatedAt: '2019-06-11 17:32:46'  
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Profiles', null, {});
  }
};
