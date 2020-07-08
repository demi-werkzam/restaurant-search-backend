"use strict";
module.exports = (sequelize, DataTypes) => {
  const restaurant = sequelize.define(
    "restaurant",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      website: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      instagram: {
        type: DataTypes.STRING,
        unique: true,
      },
      address: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      latitude: {
        type: DataTypes.FLOAT,
      },
      longitude: {
        type: DataTypes.FLOAT,
      },
    },
    {}
  );
  restaurant.associate = function (models) {
    restaurant.hasMany(models.visit);
    restaurant.belongsTo(models.user);
  };
  return restaurant;
};
