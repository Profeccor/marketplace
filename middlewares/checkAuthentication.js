const jwt = require('jsonwebtoken')
const { Account } = require('../models')

module.exports = function (req, res, next) {
	const token = req.headers.accesstoken
	const secretKeys = process.env.SECRETKEYS

	// coba decode access token
	try {
		const decoded = jwt.verify(token, secretKeys)
		const { id } = decoded

		Account.findAll({
			where: {
				id: id,
			},
		})
			.then((result) => {
				if (result.length >= 1) {
					req.currentUser = id
					next()
				} else {
					res.status(404).json(result)
				}
			})
			.catch((err) => {
				res.status(505).json(err)
			})
	} catch (err) {
		res.status(505).json("Harap login terlebih dahulu")
	}
}
