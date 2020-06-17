const { Toko } = require('../models')
module.exports = function (req, res, next) {
	// cek kalo req.currentUser = user id yang diakses lewat parameter
	Toko.findByPk(req.params.tokoID)
		.then((result) => {
			if (result) {
				//cek kepemilikan
				if (result.Accountid == req.currentUser) {
					req.currentToko = result.id
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
