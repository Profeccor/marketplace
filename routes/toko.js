const router = require('express').Router()

const TokoController = require('../controllers/toko')
const authentication = require(`../middlewares/checkAuthentication`)
const authorization = require(`../middlewares/tokoAuthorization`)

router.get('/:tokoID', TokoController.getData)
router.delete('/:tokoID',authentication , authorization, TokoController.delete)
router.post('/createToko',authentication, TokoController.createToko)

module.exports = router
