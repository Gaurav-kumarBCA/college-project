const express = require("express");
const { profile } = require("../../controllers/user/profile.controller");
<<<<<<< HEAD
const  enrollment  = require("../user/enrollment.route");
const router = express.Router();

router.use("/enroll", enrollment);
=======
const  counsellingInfo  = require("./counselling.route");
const admission = require("./addmission.route");
const router = express.Router();

router.use("/counselling", counsellingInfo);
router.use("/admission", admission);
>>>>>>> lokesh
router.get("/me", profile);

module.exports = router;
