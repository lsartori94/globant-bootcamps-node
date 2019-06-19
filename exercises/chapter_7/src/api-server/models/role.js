"use strict";
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Role.associate = function(models) {
    models.Role.belongsToMany(models.Role, {
      as: { plural: "Profiles", singular: "Profile" },
      through: "profile_role",
      foreignKey: "role_id",
      otherKey: "profile_id"
    });
  };
  return Role;
};
