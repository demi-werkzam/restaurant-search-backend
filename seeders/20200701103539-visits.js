"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "visits",
      [
        {
          visited: true,
          userId: 1,
          restaurantId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          visited: true,
          userId: 2,
          restaurantId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          visited: true,
          userId: 2,
          restaurantId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          visited: true,
          userId: 3,
          restaurantId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("visits", null, {});
  },
};
