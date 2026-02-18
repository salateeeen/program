const mongoose = require('mongoose');
const User = require(`./userModel`);
const Course = require(`./courseModel`);

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, `All reviews should have a name.`]
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: [true, `All reviews should have a rating.`]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: `User`,
        required: [true, `Review must be belong to user.`]
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Course`,
        required: [true, `Review must be belong to course.`]
    }
},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })


/// empedded 
reviewSchema.pre(`save`, async function (next) {
    this.user = await User.findById(this.user)
    next()
})

/// parent referencing
reviewSchema.pre(/^find/, async function (next) {
    this.select(`-createAt`).populate({
        path: `user`,
        select: `-__v -active -passwordChange -role -email -id`
    })
    next()
})

//# populate: behind the scene make query and return current query
reviewSchema.pre(`find`, async function (next) {
    this.populate({
        path: `course`,
        select: `-__v -hour -id`
    })
    next()
})

reviewSchema.statics.stats = async function (courseId) {
    ///this => current module
    const stats = await this.aggregate([
        {
            $match: {
                course: courseId
            }
        },
        {
            $group: {
                _id: `$course`,
                numRating: { $sum: 1 },
                avgRating: { $avg: `$rating` },
            }
        }
    ])
    await Course.findByIdAndUpdate(stats[0]._id, {
        avgRating: stats[0].avgRating,
        numRating: stats[0].numRating
    })

}

reviewSchema.post(`save`, function () {
    this.constructor.stats(this.course)

})

module.exports = mongoose.model(`Review`, reviewSchema)