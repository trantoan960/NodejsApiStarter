const express = require('express')
// const router = express.Router()
const router = require('express-promise-router')()

const UserController = require('../controllers/user')

const { validateParam, schemas } = require('../helpers/routerHelpers')

router.route('/')
    .get(UserController.index)
    .post(UserController.newUser)

router.route('/:userID')
    .get(validateParam(schemas.idSchema, 'userID'), UserController.getUser)
    .put(UserController.replaceUser)
    .patch(UserController.updateUser)

router.route('/:userID/decks')
    .get(UserController.getUserDecks)
    .post(UserController.newUserDeck)

module.exports = router