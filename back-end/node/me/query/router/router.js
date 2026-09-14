const express = require('express');
const controller = require('../controller/sort');

const Router = express.Router();

Router.route(`/sortAtId`)
    .get(controller.sort, controller.getAllStudents)

Router.route(`/`)
    .get(controller.getAllStudents)
    
Router.route(`/:id`)
    .get(controller.getStudent)

module.exports = Router