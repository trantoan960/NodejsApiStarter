/**
 * We can interact with mongoose in three diffirent ways:
 * [v] Callback
 * [v] Promises
 * [x] Async/await (Promises)
 */

 const User = require('../models/User')

const index = async (req, res, next) => {
    const users = await User.find({})

    return res.status(200).json({users})
}

const newUser = async (req, res, next) => {
    const newUser = new User(req.body)

    await newUser.save()

    return res.status(201).json({user: newUser})
}

module.exports = {
    index,
    newUser
}