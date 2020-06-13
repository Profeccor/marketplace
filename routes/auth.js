const router = require('express').Router()

const AuthController = require('../controllers/auth')

router.post('/login', AuthController.login)
router.post('/verify',AuthController.verify)
module.exports = router
