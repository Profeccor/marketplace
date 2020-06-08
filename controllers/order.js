const { Order } = require("../models");
module.exports = class {
  static getOrder(req, res) {
    Order.findByPk(req.params.orderID)
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
    Order.findAll({
        //isi nanti disini sesuai current toko 
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
  static addOrder(req, res) {
    Order.create({
      harga:req.body.harga,
      stock:req.body.stock,
      //toko ID  dibawah belum diganti dengan request tokoID yang menambah 
      productID:req.body.productID,
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
}