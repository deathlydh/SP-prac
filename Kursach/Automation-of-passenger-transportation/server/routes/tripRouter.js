const Router = require('express')
const router = new Router()
const tripController = require('../controllers/tripController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), tripController.create)
router.get('/', tripController.getAll)
router.put('/', tripController.updatecountSeats)
router.get('/:id', tripController.getOne)

module.exports = router