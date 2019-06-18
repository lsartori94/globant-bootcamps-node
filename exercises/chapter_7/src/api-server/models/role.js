'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.TEXT
  }, {});
  Role.associate = function(models) {
    Role.belongsToMany(models.Profile, { through: 'profile_role', foreignKey: 'role_id', otherKey: 'profile_id'})
  };
  return Role;
};