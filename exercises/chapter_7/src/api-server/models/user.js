'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    models.User.belongsTo(models.profile, {
      onDelete:"CASCADE",
      foreignKey: {
        allowNull: false
      } 
    })
  };
  
  return User;
};