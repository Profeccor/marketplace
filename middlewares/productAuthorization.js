const { Product, Toko } = require('../models')
module.exports = function (req, res, next) {
	// cek kalo req.currentUser = user id yang diakses lewat parameter
	Product.findByPk(req.params.productID)
	.then((result)=>{
		return Toko.findByPk(result.tokoID)
	})
	.then((hasilToko)=>{
		if(hasilToko.accountID==req.currentUser){
			req.currentToko = hasilToko.id
			next()
		}
		else{
			res.status(403).json({msg:"anda tidak memiliki hak akses"})
		}
	})
	.catch((err)=>{
		res.status(500).json(err)
	})	
	
}
