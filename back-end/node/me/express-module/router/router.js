const express = require('express');
const controller = require('../controller/controller');

const Router = express.Router();
Router.param(`id`, controller.chickID)
Router.route(`/`)
    .get(controller.getAllStudents)
    .post(controller.creatStudent);

Router.route(`/:id`)
    .get(controller.getStudent)
    .patch(controller.updateStudent)
    .delete(controller.deleteStudent);


module.exports = Router