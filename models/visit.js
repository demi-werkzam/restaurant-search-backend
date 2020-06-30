"use strict";
module.exports = (sequelize, DataTypes) => {
  const visit = sequelize.define(
    "visit",
    {
      visit: DataTypes.BOOLEAN,
    },
    {}
  );
  visit.associate = function (models) {
    // associations can be defined here
  };
  return visit;
};
