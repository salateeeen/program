const express = require('express');
const controller = require('../Controller/courseController');
const authController = require('../Controller/authController');
const reviewRouter = require('../Router/reviewRouter');


const router = express.Router();

/// to get courseId for reviews
router.use(`/:courseId/reviews`, reviewRouter)

router.get(`/`, controller.getAllCourses);
router.get(`/:id`, controller.getCourse);

router.use(authController.protect)
router.use(authController.restrictTo(`admin`))

router.route(`/:id`)
    .patch(controller.updateCourse)
    .delete(controller.deleteCourse);

router.route(`/`)
    .post(controller.createCourse)
    .delete(controller.deleteAllCourses);

module.exports = router