const { Product,Toko } = require("../models");
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
      nama: req.body.nama,
      kategori: req.body.kategori,
      deskripsi: req.body.deskripsi,
      gambar: req.body.gambar,
      //toko ID  dibawah belum diganti dengan request tokoID yang menambah
      tokoID: req.currentToko,
    })
      .then((result) => {
        if (result) {
          res.status(200).json({msg:"data berhasil ditambahkan"});
        } else {
          res.status(404).json(result);
        }
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json(err);
      });
  }
  static delete(req,res){
    Product.destroy({
      where:{
        id:req.params.productID
      }
    })
    .then((result)=>{
      if (result) {
        res.status(200).json({msg:"Berhasil Dihapus"});
      } else {
        res.status(404).json(result);
      }
    })
    .catch((err)=>{
      res.status(500).json(err);
    })
  }
};
