const Review = require('../Models/reviewModel.js');
const factory = require(`../Utils/factoryController.js`)

const setIds = function (req, res, next) {
    if (req.user) req.body.user = req.user._id
    if (req.params.courseId) req.body.course = req.params.courseId
    next()
}

const filter = function (req, res, next) {
    let filter = {}
        if (req.user) filter = { user: req.user._id }
        if (req.params.courseId) filter = { ...filter, course: req.params.courseId }
        req.filterBy = filter
    next()
}


const getAllReviews = factory.getAll(Review);
const getReview = factory.getOne(Review);
const createReview = factory.createOne(Review);
const updateReview = factory.updateOne(Review);
const deleteReview = factory.deleteOne(Review);
const deleteAllReviews = factory.deleteAll(Review);

module.exports = {
    getAllReviews,
    getReview,
    createReview,
    setIds,
    updateReview,
    deleteReview,
    deleteAllReviews,
    filter
}
