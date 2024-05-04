const Router = require('express')
const router = new Router()
const busstationController = require('../controllers/busstationController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), busstationController.create)
router.get('/', busstationController.getAll)

module.exports = router