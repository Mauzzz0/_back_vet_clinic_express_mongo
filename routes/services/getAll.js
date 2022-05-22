const getAll = (model) => {
    return async (req, res) => {
        try {
            const data = await model.find();
            res.json(data)
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

module.exports = getAll;