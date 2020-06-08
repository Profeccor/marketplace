'use strict';
module.exports = (sequelize, DataTypes) => {
  class Order extends sequelize.Sequelize.Model{}
  Order.init({
    harga: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    productID: DataTypes.INTEGER
  }, {sequelize});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};