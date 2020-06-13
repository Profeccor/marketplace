const { Account } = require('../models')
module.exports = function (req, res, next) {
	// cek kalo req.currentUser = user id yang diakses lewat parameter
	Account.findByPk(req.params.accountID)
		.then((result) => {
			if (result) {
				//cek kepemilikan
				if (result.id == req.currentUser) {
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
