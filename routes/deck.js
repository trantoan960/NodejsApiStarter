const express = require('express')
// const router = express.Router()
const router = require('express-promise-router')()

const DeckController = require('../controllers/deck')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

router.route('/')
    .get(DeckController.index)
    .post(validateBody(schemas.newDeckSchema), DeckController.newDeck)

router.route('/:deckID')
    .get(validateParam(schemas.idSchema, 'deckID'), DeckController.getDeck)
    .put(validateParam(schemas.idSchema, 'deckID'), validateBody(schemas.newDeckSchema), DeckController.replaceDeck)
    .patch(validateParam(schemas.idSchema, 'deckID'), validateBody(schemas.deckOptionalSchema), DeckController.updateDeck)
    .delete(validateParam(schemas.idSchema, 'deckID'), DeckController.deleteDeck)

module.exports = router