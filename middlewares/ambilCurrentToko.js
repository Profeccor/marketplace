const {Toko} = require (`../models`)
module.exports = function (req,res,next){
    Toko.findOne({
        where:{
            accountID: req.currentUser
        }
    })
    .then((result)=>{
        console.log(result.id)
        if(result == null){
            
            res.status(404).json({msg:"Toko tidak Ditemukan"})
        }else{
            req.currentToko = result.id 
            next()
        }
    })
    .catch((err)=>{
        res.status(500).json({msg:"error"})
    })
}