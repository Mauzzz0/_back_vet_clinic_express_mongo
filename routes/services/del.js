const del = (model) => {
    return async (req, res) => {
        try {
            const id = req.params.id;
            const data = await model.findByIdAndDelete(id)
            res.send(`Document with ${data.name} has been deleted..`)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}

module.exports = del;