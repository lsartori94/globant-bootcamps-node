'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.TEXT
  }, {});
  Role.associate = function(models) {
      models.Role.belongsToMany(models.Profile, { as: 'Profiles', through: 'profile_role', foreignKey: 'role_id', otherKey: 'profile_id'})
  };
  return Role;
};