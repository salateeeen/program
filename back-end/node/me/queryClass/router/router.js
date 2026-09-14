const express = require('express');
const controller = require(`./../controller/controller`);

const Router = express.Router();

Router.route(`/`)
    .get(controller.getAllStudents)

module.exports = Router