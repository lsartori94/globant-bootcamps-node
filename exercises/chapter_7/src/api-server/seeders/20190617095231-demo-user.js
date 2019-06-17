"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "DemoName!",
          lastName: "DemoLastName",
          email: "demo@demo.com",
          password: "aDemoPassword",
          username: "user-demo",
          createdAt: '2019-06-11 17:32:46',
          updatedAt: '2019-06-11 17:32:46'
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
