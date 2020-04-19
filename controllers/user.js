/**
 * We can interact with mongoose in three diffirent ways:
 * [v] Callback
 * [v] Promises
 * [x] Async/await (Promises)
 */

 const User = require('../models/User')

 const getUser = async (req, res, next) => {
    const { userID } = req.params

    const user = await User.findById(userID)

    return res.status(200).json({user})
 }

const index = async (req, res, next) => {
    const users = await User.find({})

    return res.status(200).json({users})
}

const newUser = async (req, res, next) => {
    const newUser = new User(req.body)

    await newUser.save()

    return res.status(201).json({user: newUser})
}

const replaceUser = async (req, res, next) => {
    // enforce new user to old user
    const { userID } = req.params

    const newUser = req.body

    const result = await User.findByIdAndUpdate(userID, newUser)

    return res.status(200).json({success: true})
}

const updateUser = async (req, res, next) => {
    // number of fields
    const { userID } = req.params

    const newUser = req.body

    const result = await User.findByIdAndUpdate(userID, newUser)

    return res.status(200).json({success: true})
}

module.exports = {
    getUser,
    index,
    newUser,
    replaceUser,
    updateUser
}