'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Profile.associate = function(models) {
    Profile.hasMany(models.User);
    Profile.belongsToMany(models.Role, { through: 'profile_role', foreignKey: 'profile_id', otherKey: 'role_id'})
  };
  sequelize.Sync;
  return Profile;
};