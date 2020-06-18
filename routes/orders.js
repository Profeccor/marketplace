const router = require('express').Router()

const OrderController = require('../controllers/order')
const authentication = require('../middlewares/checkAuthentication')

router.get('/:orderID',authentication, OrderController.getOrder)
router.delete('/:orderID',authentication, OrderController.delete)
router.get('/getall',authentication, OrderController.getAll)
router.post('/',authentication, OrderController.addOrder)
module.exports = router
