"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("likes", "visitId", {
      type: Sequelize.INTEGER,
      references: {
        model: "visits",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("likes", "visitId");
  },
};
