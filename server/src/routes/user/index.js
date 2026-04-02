const express = require("express");
const { profile } = require("../../controllers/user/profile.controller");
const admission = require("./addmission.route");
const router = express.Router();

router.use("/admission", admission);
router.get("/me", profile);

module.exports = router;
