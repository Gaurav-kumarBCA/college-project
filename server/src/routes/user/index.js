const express = require("express");
const { profile } = require("../../controllers/user/profile.controller");
const  counsellingInfo  = require("./counselling.route");
const admission = require("./addmission.route");
const router = express.Router();

router.use("/counselling", counsellingInfo);
router.use("/admission", admission);
router.get("/me", profile);

module.exports = router;
