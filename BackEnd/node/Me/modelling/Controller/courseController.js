const Course = require('../Models/courseModel.js');
const handleAsyncError = require(`../Error/asyncError.js`);
const appError = require('../Error/appError.js');

const getAllCourses = handleAsyncError(async (req, res, next) => {
    const courses = await Course.find().select(`-__v`);
    res.status(200).json({
        status: "success",
        result: courses.length,
        data: { courses }
    })
})

const getCourse = handleAsyncError(async (req, res, next) => {
    const id = req.params.id;
    const course = await Course.findById(id).select(`-__v`);

    if (!course) {
        return next(new appError(`no course found wiht this id`, 404));
    }

    res.status(200).json({
        status: "success",
        data: {
            course
        }
    })
})

const creatCourse = handleAsyncError(async (req, res, next) => {
    const course = await Course.create(req.body);
    res.status(201).json({
        status: "success",
        data: {
            course: course
        }
    });
})


const updateCourse = handleAsyncError(async (req, res, next) => {
    const id = req.params.id;
    const course = await Course.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
    });

    if (!course) {
        return next(new appError(`no course found wiht this id`, 404))
    }

    res.status(200).json({
        status: "success",
        data: {
            course
        }
    })
})

const deleteCourse = handleAsyncError(async (req, res, next) => {
    const id = req.params.id;
    const course = await Course.deleteOne({ _id: id })

    if (!course) {
        return next(new appError(`no course found wiht this id`, 404))
    }
    res.status(204).json({
        status: "success",
        data: "null"
    })
})

module.exports = {
    getAllCourses,
    getCourse,
    creatCourse,
    updateCourse,
    deleteCourse,
}
