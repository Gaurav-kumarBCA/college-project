const express = require("express");
const { getCounselling } = require("../../controllers/HOD/counsilling.controller");

const router = express.Router();

router.get("/", getCounselling);

module.exports = router;

