'use strict';
module.exports = (sequelize, DataTypes) => {
  class Product extends sequelize.Sequelize.Model{}
  Product.init({
    nama: DataTypes.STRING,
    kategori: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    gambar: DataTypes.STRING,
    tokoID: DataTypes.INTEGER
  }, {sequelize});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};