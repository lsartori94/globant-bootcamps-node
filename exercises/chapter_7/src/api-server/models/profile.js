'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  });
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.hasMany(models.user)
    models.Profile.belongsToMany(models.role, {through: 'profileRole'})
  };
  
  return Profile;
};