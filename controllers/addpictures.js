const { Product,Toko } = require("../models");
   module.exports = (req,res,next)=>{
    const gambar = req.currentproductid+".jpg"    
    Product.update({
            gambar
        },{where:{id:req.currentproductid}}
        )
        .then((result)=>{
            if (result) {
             next()
            } else {
              res.status(404).json(result);
            }
          })
          .catch((err)=>{
            res.status(500).json(err);
          })
        
   }
    
    
