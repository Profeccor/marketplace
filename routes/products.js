const router = require('express').Router()

const ProductController = require('../controllers/product')

const authentication = require(`../middlewares/checkAuthentication`)
const authorization = require(`../middlewares/productAuthorization`)
const currentToko = require (`../middlewares/ambilCurrentToko`)

router.get('/:productID', ProductController.getData)
router.delete('/:productID',authentication,authorization, ProductController.delete)
router.post('/',authentication,currentToko, ProductController.addProduct)

module.exports = router
