'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('address', {
    street: DataTypes.STRING,
    phone: DataTypes.STRING
  })

  Address.associate = function (models) {
    models.address.belongsTo(models.customer, {foreignKey: 'fk_customerid', targetKey: 'uuid'});
  }

  return Address;
};  