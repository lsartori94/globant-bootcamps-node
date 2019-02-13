'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('product', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    details: DataTypes.STRING
  });

  Product.associate = function (models) {
    models.product.belongsTo(models.company, {foreignKey: 'companyId', targetKey: 'id'});
  }

  return Product;
};