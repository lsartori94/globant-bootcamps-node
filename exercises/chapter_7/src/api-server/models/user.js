'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    pass: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.Profile);
  };
  sequelize.Sync;
  return User;
};