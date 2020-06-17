const { Toko,Product } = require("../models");
module.exports = class {
  static getData(req, res) {
    Toko.findByPk(req.params.tokoID,
      {
        include:[Product]
    }
    )
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
  static createToko(req, res) {
    Toko.create({
      nama: req.body.nama,
      alamat: req.body.alamat,
      luas_lahan: req.body.luas_lahan,
      deskripsi: req.body.deskripsi,
      gambar: req.body.gambar,
      //account ID  dibawah belum diganti dengan request currentUser
      accountID: req.currentUser,
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
    Toko.destroy({
      where: {
        id:req.params.tokoID,
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
