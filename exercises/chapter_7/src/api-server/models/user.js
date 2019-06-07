'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    ProfileId: DataTypes.UUID
  }, {});
  User.associate = function(models) {
      models.User.belongsTo(models.Profile, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false
        }
      });
    
  };
  
  return User;
};