const router = require('express').Router()

const AccountController = require('../controllers/account')

router.get('/:accountID', AccountController.getData)
router.post('/signup', AccountController.signUp)
router.delete('/:accountID', AccountController.delete)
module.exports = router
