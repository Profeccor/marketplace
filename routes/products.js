const router = require('express').Router()

const ProductController = require('../controllers/product')

router.get('/:productID', ProductController.getData)
router.delete('/:productID', ProductController.delete)
router.post('/addProduct', ProductController.addProduct)

module.exports = router
