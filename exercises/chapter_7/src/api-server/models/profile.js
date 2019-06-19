"use strict";
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    "Profile",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {}
  );
  Profile.associate = function(models) {
    models.Profile.hasMany(models.User, { plural: "Users", singular: "User" });
    models.Profile.belongsToMany(models.Role, {
      as: { plural: "Roles", singular: "Role" },
      through: "profileRole",
      foreignKey: "roleId",
      otherKey: "profileId"
    });
  };
  return Profile;
};
