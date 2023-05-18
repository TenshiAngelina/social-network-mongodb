const router = require('express').Router()
const readRoutes = require('./readerRoutes')
// const postRoutes = require('./postRoutes')
// const deleteRoutes = require('./deleteRoutes')
router.use('/read', readRoutes)

module.exports = router