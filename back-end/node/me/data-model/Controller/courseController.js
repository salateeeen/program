const Course = require('../Models/courseModel.js');
const factory = require(`../Utils/factoryController.js`)

const getAllCourses = factory.getAll(Course);
const getCourse = factory.getOne(Course);
const createCourse = factory.createOne(Course);
const updateCourse = factory.updateOne(Course);
const deleteAllCourses = factory.deleteAll(Course);
const deleteCourse = factory.deleteOne(Course);

module.exports = {
    getAllCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteAllCourses,
    deleteCourse,
}
