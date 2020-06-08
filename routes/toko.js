const router = require('express').Router()

const TokoController = require('../controllers/toko')

router.get('/:tokoID', TokoController.getData)
router.post('/createToko', TokoController.createToko)

module.exports = router
