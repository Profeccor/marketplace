"use strict";
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class Account extends sequelize.Sequelize.Model {}
  Account.init(
    {
      nama: DataTypes.STRING,
      nomer: DataTypes.STRING,
      email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: {
						msg: 'masukkan email dengan format yang benar',
					},
				},
			},
      alamat: DataTypes.STRING,
      password:{
				type: DataTypes.STRING,
				validate: {
					minChar(value) {
						if (value.length < 6) {
							throw new Error('a good password atleast contains 6 characters')
						}
					},
				},
			},
      jenis_kelamin: DataTypes.STRING,
      tnggl_lhr: DataTypes.DATE,
    },
    {
      hooks: {
        beforeCreate: (user) => encryptPasswords(user),
        beforeUpdate: (user) => encryptPasswords(user),
      },
      sequelize,
    }
  );
  function encryptPasswords(user) {
    const hashedPassword = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(2)
    );
    user.password = hashedPassword;
    user.email = user.email.toLowerCase();
  }
  Account.associate = function (models) {
    // associations can be defined here
  };
  return Account;
};
