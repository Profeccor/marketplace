const router = require('express').Router()

const AccountsOrderController = require('../controllers/accountorder')

router.get('/:accountOrderID', AccountsOrderController.getData)
router.delete('/:accountOrderID', AccountsOrderController.delete)
router.get('/getall', AccountsOrderController.getAll)

module.exports = router
