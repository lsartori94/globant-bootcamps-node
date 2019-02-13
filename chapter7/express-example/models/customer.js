'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('customer', {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER,
  })

  Customer.associate = function (models) {
    models.customer.hasOne(models.address, {foreignKey: 'fk_customerid', targetKey: 'uuid'});
  }

  return Customer;
};
