"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      lastname: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    models.User.belongsTo(models.Profile, {
      foreingKey: { allowNull: false }
    });
  };
  return User;
};
