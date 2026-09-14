const express = require('express');
const controller = require('../Controller/userController.js');

const router = express.Router();

router.get(`/getMe`,controller.setMeId, controller.getUser);
router.patch(`/updateMe`, controller.updateMe);
router.delete(`/deleteMe`, controller.deleteMe);


router.get(`/`, controller.getAllUsers);
router.get(`/:id`,controller.getUser);
router.patch(`/updateUserByAdmin/:id`, controller.updateUserByAdmin);
router.delete(`/deleteUserByAdmin/:id`, controller.deleteUserByAdmin);

module.exports = router;