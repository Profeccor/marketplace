const { AccountOrder } = require("../models");
module.exports = class {
  static getData(req, res) {
    AccountOrder.findByPk(req.params.accountOrderID)
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
  static getAll(req, res) {
    AccountOrder.findAll({
      //isi sesuai current account id dan order id belum di tambah
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
    AccountOrder.destroy({
      where: {
        id: req.params.accountOrderID,
      },
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
};
