const Text = require('../models/text.model');

module.exports = {
    // ALL TEXTS - READ ALL
    findAll: (req, res) => {
        Text.find({})
            .then((allTexts) => res.status(200).json(allTexts))
            .catch((err) => res.status(400).json(err));
    },

    // CREATE A TEXT
    addText: (req, res) => {
        const { body } = req.body;
        Text.create({
            body: body
        })
            .then(newText => {
                res.status(201).json({ text: newText })
            })
            .catch((err) => {
                res.status(406).json(err);
            })
    },

    // READ A TEXT
    findOne: (req, res) => {
        Text.findOne({ _id: req.params.id })
            .then(texts => res.status(200).json(texts))
            .catch(err => res.status(400).json(err));
    },

    // UPDATE A TEXT
    updateText: (req, res) => {
        Text.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedText => res.status(201).json(updatedText))
        .catch(err => {
            res.status(400).json(err);
        })
    },

    // DELETE A TEXT
    deleteText: (req, res) => {
        Text.deleteOne({ _id:req.params.id })
            .then(deleteConfirmation => res.status(202).json(deleteConfirmation))
            .catch(err => res.status(400).json(err))
    }
}