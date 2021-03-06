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
  static addProduct(req, res,next) {
  //  console.log(req.body)
  console.log(req.file)
    Product.create({
      nama: req.body.nama,
      kategori: req.body.kategori,
      deskripsi: req.body.deskripsi,
      gambar: req.file.filename,
      
      tokoID: req.currentToko,
    })
      .then((result) => {
        if (result) {
          req.currentproductid = result.id
         next()
          
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
