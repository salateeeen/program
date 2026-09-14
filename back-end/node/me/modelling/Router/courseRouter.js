const express = require('express');
const controller = require('../Controller/courseController');

const router = express.Router();

router.route(`/`)
    .get(controller.getAllCourses)
    .post(controller.creatCourse);

router.route(`/:id`)
    .get(controller.getCourse)
    .patch(controller.updateCourse)
    .delete(controller.deleteCourse);


module.exports = router