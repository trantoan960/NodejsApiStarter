const express = require('express')
const router = express.Router()

const UserController = require('../controllers/user')

router.route('/')
    .get(UserController.index)
    .post()
    .patch()
    .put()
    .delete()

module.exports = router