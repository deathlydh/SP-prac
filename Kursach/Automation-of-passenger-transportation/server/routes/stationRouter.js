const Router = require('express')
const router = new Router()
const stationController = require('../controllers/stationController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), stationController.create)
router.get('/', stationController.getAll)
router.get('/:id', stationController.getOne)


module.exports = router