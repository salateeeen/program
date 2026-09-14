const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    name: {
        type : String,
        require : [true, `All reviews should have a name.`]
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        require : [true, `All reviews should have a rating.`]
    },
    user: {
        type : mongoose.model,
        ref:`_id`
    },
    tour: {
        type : mongoose.model,
        ref:`_id`
    }
})

module.exports = mongoose.model(`Review`, reviewSchema)