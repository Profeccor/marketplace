const multer = require('multer')
const { v4: uuidv4 } = require('uuid');
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        // const fileinfo = file.originalname.split(".")
        // const fileextension = fileinfo[fileinfo.length -1]
        // console.log(file)
        const hash = uuidv4();
       
      cb(null, "Product-" + hash + path.extname(file.originalname));
    },
  });

  const upload = multer({
    storage,
    limits:{fileSize:10000000},
    fileFilter:function(req,file,cb){
      const filetypes = /jpeg|jpg|png/
      const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
      const mimetype = filetypes.test(file.mimetype);
      if(mimetype && extname){
        return cb(null,true)
      }else{
        cb({message:'Gambar'})
      }
    }
    
  }).single('gambar')

  


module.exports = upload