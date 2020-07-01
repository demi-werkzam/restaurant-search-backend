"use strict";
module.exports = (sequelize, DataTypes) => {
  const like = sequelize.define(
    "like",
    {
      like: DataTypes.BOOLEAN,
    },
    {}
  );
  like.associate = function (models) {
    like.belongsTo(models.visit);
  };
  return like;
};
