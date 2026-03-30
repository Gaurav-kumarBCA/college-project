const express = require("express");
const { profile } = require("../../controllers/user/profile.controller");
const  enrollment  = require("../user/enrollment.route");
const router = express.Router();

router.use("/enroll", enrollment);
router.get("/me", profile);

module.exports = router;
