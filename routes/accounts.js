const router = require('express').Router()

const AccountController = require('../controllers/account')
const authentication = require('../middlewares/checkAuthentication')
const authorization = require('../middlewares/accountAuthorization')

router.get('/:accountID', AccountController.getData)
router.post('/signup', AccountController.signUp)
router.delete('/:accountID', authentication , authorization,AccountController.delete)
module.exports = router
