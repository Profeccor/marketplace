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
    Order.belongsToMany(models.Account, {
      through: "AccountOrder",
      foreignKey: "orderID",
    });
  };
  return Order;
};