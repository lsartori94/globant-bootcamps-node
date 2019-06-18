'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('role', {
    name: DataTypes.STRING,
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
    Role.hasMany(models.profile)
    models.Role.belongsToMany(models.profile, {through: 'profileRole'})
      };
  };
return Role;