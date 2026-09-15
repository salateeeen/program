const mongoose = require('mongoose');

const student = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required : true
    },
    name: {
        type: String,
        required : true
    }
})

module.exports = mongoose.model(`Student`, student);