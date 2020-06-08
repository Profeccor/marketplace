const router = require('express').Router()

const ProductController = require('../controllers/product')

router.get('/:productID', ProductController.getData)
router.post('/addProduct', ProductController.addProduct)

module.exports = router
