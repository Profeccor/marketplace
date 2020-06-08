'use strict';
module.exports = (sequelize, DataTypes) => {
  class AccountOrder extends sequelize.Sequelize.Model{}
  AccountOrder.init({
    accountID: DataTypes.INTEGER,
    orderID: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    ulasan: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {sequelize});
  AccountOrder.associate = function(models) {
    // associations can be defined here
  };
  return AccountOrder;
};