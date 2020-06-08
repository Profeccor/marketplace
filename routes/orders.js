const router = require('express').Router()

const OrderController = require('../controllers/order')

router.get('/:accountID', AccountController.getOrder)
router.get('/getall', AccountController.getAll)
router.post('/addOrder', AccountController.addOrder)
module.exports = router
