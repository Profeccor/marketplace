const { Product } = require('../models')
module.exports = function (req, res, next) {
	// cek kalo req.currentUser = user id yang diakses lewat parameter
	Product.findByPk(req.params.productID)
		.then((result) => {
			if (result) {
				//cek kepemilikan
				if (result.tokoID == req.currentToko) {
					next()
				} else {
					res.status(404).json("Anda tidak memiliki hak akses")
				}
			} else {
                res.status(404).json({msg:"data not found"})
			}
		})
		.catch((err) => {
            res.status(500).json(err)
		})
}
