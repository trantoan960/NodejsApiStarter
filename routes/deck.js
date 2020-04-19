const express = require('express')
// const router = express.Router()
const router = require('express-promise-router')()

const DeckController = require('../controllers/deck')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

router.route('/')
    .get(DeckController.index)
    .post(validateBody(schemas.newDeckSchema), DeckController.newDeck)

module.exports = router