const express = require('express');
const controller = require('../Controller/aggregationController');

const router = express.Router();

router.use(`/`,controller.userStats);

module.exports = router;