'use strict';
module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define('company', {
    name: DataTypes.STRING,
    street: DataTypes.STRING,
    phone: DataTypes.STRING
  });

  Company.associate = function (models) {
    models.company.hasMany(models.product, {
      foreignKey: 'companyId',
      sourceKey: 'id'
    })
  }

  return Company;
};