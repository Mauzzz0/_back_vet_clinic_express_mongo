const getOne = (model) => {
    return async (req, res) => {
        try {
            const data = await model.findById(req.params.id);
            res.json(data)
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

module.exports = getOne;