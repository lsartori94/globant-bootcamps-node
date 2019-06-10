"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
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
