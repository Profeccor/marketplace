const router = require('express').Router()

const ProductController = require('../controllers/product')

const authentication = require(`../middlewares/checkAuthentication`)
const authorization = require(`../middlewares/tokoAuthorization`)
const Pauthorization = require(`../middlewares/productAuthorization`)

router.get('/:productID',authentication,authorization,Pauthorization, ProductController.getData)
router.delete('/:productID',authentication,authorization,Pauthorization, ProductController.delete)
router.post('/addProduct',authentication,authorization,Pauthorization, ProductController.addProduct)

module.exports = router
