"use strict";
module.exports = (sequelize, DataTypes) => {
  const visit = sequelize.define(
    "visit",
    {
      visited: DataTypes.BOOLEAN,
    },
    {}
  );
  visit.associate = function (models) {
    visit.belongsTo(models.restaurant);
    visit.belongsTo(models.user);
  };
  return visit;
};
