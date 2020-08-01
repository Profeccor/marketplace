const multer = require("multer");
const router = require("express").Router();

const ProductController = require("../controllers/product");

const AddPictures = require("../controllers/addpictures");
const authentication = require(`../middlewares/checkAuthentication`);
const authorization = require(`../middlewares/productAuthorization`);
const currentToko = require(`../middlewares/ambilCurrentToko`);
const uploadgambar = require("../middlewares/upload");

router.get("/:productID", ProductController.getData);
router.delete(
  "/:productID",
  authentication,
  authorization,
  ProductController.delete
);
router.post(
  "/",
  authentication,
  currentToko,
  (req, res, next) => {
    uploadgambar(req, res, (err) => {
      if (err) {
        res.send(err.message);
        console.log(err);
      } else {
        if (req.file == undefined) {
          res.send({ message: "Gambar kosong" });
        } else {
          console.log(req.file);
          next();
        }
      }
    });
  }, //multer
  ProductController.addProduct,
  (req, res) => {
    res
      .status(200)
      .json({ msg: "data berhasil ditambahkan", id: req.currentproductid });
  }
);

module.exports = router;
