const mongoose = require('mongoose');
const User = require(`./userModel`);
const Course = require(`./courseModel`);
const appError = require(`../Error/appError.js`);



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
    if (stats.length > 0) {
        await Course.findByIdAndUpdate(courseId, {
            avgRating: stats[0].avgRating,
            numRating: stats[0].numRating
        })
    } else {
        await Course.findByIdAndUpdate(courseId, {
            avgRating: 0,
            numRating: 4.5
        })
    }

}

reviewSchema.pre(`save`, async function (next) {
    const userId = this.user
    const courseId = this.course
    const haveReview = await this.constructor.findOne({
        user: userId,
        course: courseId
    })
    if (haveReview) {
        return next(new appError(`This user already reviewed this course.`, 404))
    }
    next()
})

//& post because we nead a new document
//* save and create
reviewSchema.post(`save`, function () {
    console.log(this);
    /// this = review document 
    this.constructor.stats(this.course)
})

//* delete and update
reviewSchema.post(/^findOneAnd/, async function (reviewDoc) {
    reviewDoc.constructor.stats(reviewObj.course)
})

module.exports = mongoose.model(`Review`, reviewSchema)