const mongoose = require('mongoose');

const TextSchema = new mongoose.Schema({
    body: {
        type: String,
        required: [
            true,
            "Input must contain at least 5 words! Must contain at least 120 characters (a few sentences) to accurately detect tone."
        ]
    },
    mood: {
        type: String,
        default: "Neutral"
    }
}, {timestamps: true});

module.exports = mongoose.model('Text', TextSchema);