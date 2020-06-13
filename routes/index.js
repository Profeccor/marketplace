const router = require('express').Router()

const accounts = require('./accounts')
const toko = require('./toko')
const products = require(`./products`)
const orders = require(`./orders`)
const accountsorder = require(`./accountsorder`)
const auth = require('./auth')

router.use('/auth', auth)
router.use('/accounts', accounts)
router.use('/toko', toko)
router.use('/products', products)
router.use('/orders', orders)
router.use('/accountsorder', accountsorder)

module.exports = router
