const express = require("express");
const router  = express.Router();

const {checkout,paymentVerification} = require("../controllers/paymentController.js");
console.log(checkout);

router.route("/checkout").post(checkout);
router.route("/paymentVerification").post(paymentVerification);

module.exports = router;