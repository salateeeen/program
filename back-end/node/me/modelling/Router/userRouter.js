const express = require('express');
const controller = require('../Controller/userController.js');
const authController = require(`../Controller/authController.js`)

const router = express.Router();

router.post(`/signup`, authController.signup)
router.post(`/login`, authController.login)
router.post(`/forgotPassword`, authController.forgotPassword)
router.patch(`/resetPassword/:token`, authController.resetPassword)


router.use(authController.protect)

router.patch(`/updatePassword`, authController.updatePassword)
router.patch(`/updateMe`, controller.updateMe)
router.delete(`/deleteMe`, controller.deleteMe);

router.use(authController.restrictTo(`admin`))

router.get(`/`, controller.getAllUsers)
router.get(`/:id`,controller.getUser)

module.exports = router