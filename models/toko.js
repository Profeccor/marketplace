'use strict';
module.exports = (sequelize, DataTypes) => {
  class Toko extends sequelize.Sequelize.Model{}
  Toko.init({
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    luas_lahan: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    gambar: DataTypes.STRING,
    accountID: DataTypes.INTEGER
  }, {sequelize});
  Toko.associate = function(models) {
    // associations can be defined here
    Toko.hasMany(models.Product,{
			foreignKey: 'tokoID',
		})
  };
  return Toko;
};