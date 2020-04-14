const index = (req, res) => {
    return res.status(200).json({
        message: 'You requested to user handle.'
    })
}

module.exports = {
    index
}