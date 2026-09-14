const express = require('express');
const controller = require(`../Controller/reviewController.js`);
const authController = require(`../Controller/authController.js`)


const router = express.Router({ mergeParams: true });

router.use(authController.protect)

router.route(`/`)
    .get(controller.filter, controller.getAllReviews)
    .post(authController.restrictTo(`user`), controller.setIds, controller.createReview);

router.route(`/:id`)
    .get(controller.filter, controller.getReview)
    .patch(authController.restrictTo(`user`, `admin`), controller.updateReview)
    .delete(authController.restrictTo(`user`, `admin`), controller.deleteReview);


module.exports = router