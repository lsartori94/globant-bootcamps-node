'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    models.User.belongsTo(models.Profile, {
      foreingKey: { allowNull: false }
    });
  };
  sequelize.Sync;

  return User;
};