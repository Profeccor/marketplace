const router = require('express').Router()

const accounts = require('./accounts')
const toko = require('./toko')

router.use('/accounts', accounts)
router.use('/toko', toko)

module.exports = router
