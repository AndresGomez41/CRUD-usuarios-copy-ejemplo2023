const router  = require('express').Router()
const userControllers = require('./users.controllers')

router.get('/users', userControllers.getUsers)
router.post('/users', userControllers.createNewUser)
router.get('/users/:id', userControllers.getUserById)

module.exports = router;