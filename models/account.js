'use strict';
module.exports = (sequelize, DataTypes) => {
  class Account extends sequelize.Sequelize.Model{}
  Account.init({
    nama: DataTypes.STRING,
    nomer: DataTypes.STRING,
    email: DataTypes.STRING,
    alamat: DataTypes.STRING,
    password: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    tnggl_lhr: DataTypes.DATE
  }, {sequelize});
  Account.associate = function(models) {
    // associations can be defined here
  };
  return Account;
};