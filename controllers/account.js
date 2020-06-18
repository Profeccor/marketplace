const { Account,Toko } = require("../models");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = class {
  static getData(req, res) {
    Account.findByPk(req.params.accountID,{
      include:[Toko]
  })
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json(result);
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
  static signUp(req, res) {
    Account.create({
      nama: req.body.nama,
      nomer: req.body.nomer,
      email: req.body.email,
      alamat: req.body.alamat,
      password: req.body.password,
      jenis_kelamin: req.body.jenis_kelamin,
      tnggl_lhr: req.body.tnggl_lhr,
    })
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json(result);
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
  static delete(req, res) {
    Account.destroy({
      where: {
        id: req.params.accountID,
      },
    })
      .then((result) => {
        if (result) {
          res.status(200).json("account berhasil dihapus");
        } else {
          res.status(404).json(result);
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
  
};
