"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "restaurants",
      [
        {
          name: "Water en Brood",
          email: "waterenbrood@waterbrood.nl",
          website: "waterenbrood.nl",
          instagram: "@waterenbrood",
          address: "straat, 19, Amsterdam",
          latitude: null,
          longitude: null,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Resto",
          email: "resto@resto.nl",
          website: "resto.nl",
          instagram: "@retso",
          address: "straat, 17, Amsterdam",
          latitude: null,
          longitude: null,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mino",
          email: "mino@re.nl",
          website: "mino.nl",
          instagram: "@drop",
          address: "straat, 12, Amsterdam",
          latitude: null,
          longitude: null,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mime",
          email: "mime@re.nl",
          website: "mime.nl",
          instagram: "@mime",
          address: "straat, 15, Amsterdam",
          latitude: null,
          longitude: null,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("restaurants", null, {});
  },
};
