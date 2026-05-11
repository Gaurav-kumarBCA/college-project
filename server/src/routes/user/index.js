const express = require("express");
const { profile } = require("../../controllers/user/profile.controller");
const admission = require("./addmission.route");
<<<<<<< HEAD
const counselling = require("./counselling.route")
const router = express.Router();
=======
const  router = express.Router();
>>>>>>> a4571979a0eb1ae2a27adeb7a06495e129f2ffe6

router.use("/admission", admission);
router.use("/counselling", counselling)
router.get("/me", profile);

module.exports = router;
