const router = require('express').Router()

const OrderController = require('../controllers/order')

router.get('/:accountID', OrderController.getOrder)
router.delete('/:accountID', OrderController.delete)
router.get('/getall', OrderController.getAll)
router.post('/addOrder', OrderController.addOrder)
module.exports = router
