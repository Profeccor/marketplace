const router = require('express').Router()

const TokoController = require('../controllers/toko')

router.get('/:tokoID', TokoController.getData)
router.delete('/:tokoID', TokoController.delete)
router.post('/createToko', TokoController.createToko)

module.exports = router
