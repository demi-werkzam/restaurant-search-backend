"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "likes",
      [
        {
          liked: true,
          visitId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          liked: true,
          visitId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          liked: true,
          visitId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          liked: true,
          visitId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("likes", null, {});
  },
};
