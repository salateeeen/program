const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Please enter the course name.`],
        unique: [true, `The course was already included.`]
    },
    hour: {
        type: Number,
        required: [true, `Please enter how much course hours.`],
        min: [1, `Minimum number is 1.`],
        max: [3, `Maximum number is 3.`]
    },
    numRating: Number,
    avgRating: Number
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    });

courseSchema.virtual(`reviews`, {
    ref: `Review`,
    //# name in foreign schema
    foreignField: `course`,
    //# name in local schema
    localField: `_id`
});

courseSchema.pre(`findOne`, function (next) {
    this.populate({
        path: `reviews`,
        select: `-_id -__v`
    })
    next()
});

module.exports = mongoose.model(`Course`, courseSchema);