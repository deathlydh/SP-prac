const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.post('/logout', userController.logout)
router.post('/uvolit', userController.uvolit)
router.get('/getAllUsers', authMiddleware, userController.getAllUsers)
module.exports = router