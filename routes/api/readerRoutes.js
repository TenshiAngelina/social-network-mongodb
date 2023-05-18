const router = require('express').Router()

router.get('/', () => {
  console.log('home route')
})

module.exports = router;