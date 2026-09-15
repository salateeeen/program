const mongoose = require('mongoose');

const student = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required : true,
        validate: [Number.isInteger, 'ID must be an integer']
    },
    name: {
        type: String,
        required : true
    },
    collage: {
        type: String,
        default: "ENG"
    },
    courses : [String]
})
module.exports = mongoose.model(`Student`, student);