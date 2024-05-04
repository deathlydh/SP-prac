const Router = require('express')
const router = new Router()
const tripRouter = require('./tripRouter')
const busstationRouter = require('./busstationRouter')
const stationRouter = require('./stationRouter')
const userRouter = require('./userRouter')


router.use('/user', userRouter)
router.use('/trip', tripRouter)
router.use('/busstation', busstationRouter)
router.use('/station', stationRouter)


module.exports = router