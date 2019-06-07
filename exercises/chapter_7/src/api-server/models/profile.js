'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Profile.associate = function(models) {
    models.Profile.hasMany(models.User);
    models.Profile.belongsToMany(models.Role, {as: 'Roles', through: 'profile_role',  foreignKey: 'role_id', otherKey: 'profile_id'})
  };
  return Profile;
};