const { Product } = require("../models");
module.exports = class {
  static getData(req, res) {
    Product.findByPk(req.params.productID)
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
  static addProduct(req, res) {
    Product.create({
      nama:req.body.nama,
      kategori:req.body.alamat,
      deskripsi:req.body.luas_lahan,
      gambar:req.body.deskripsi,
      //toko ID  dibawah belum diganti dengan request tokoID yang menambah
      tokoID:req.body.tokoID,
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