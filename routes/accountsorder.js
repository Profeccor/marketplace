const router = require('express').Router()

const AccountsOrderController = require('../controllers/accountorder')
const authentication = require('../middlewares/checkAuthentication')

router.get('/:accountOrderID',authentication, AccountsOrderController.getData)
router.delete('/:accountOrderID',authentication, AccountsOrderController.delete)
router.get('/getall',authentication, AccountsOrderController.getAll)

module.exports = router
