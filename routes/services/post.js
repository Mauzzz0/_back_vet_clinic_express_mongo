const post = (model) => {
    return async(req, res) =>
    {
        const data = new model({
            ...req.body
        })

        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
}

module.exports = post;