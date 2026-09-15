const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    collage: {
        type: String,
        default: "ENG"
    },
    courses : {
        type: [String],
        default: [`js`, `node`]
    }
})
module.exports = mongoose.model(`Course`, courseSchema);