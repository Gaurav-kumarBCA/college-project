const express = require("express");
const HODmange = require("./HODmanage.route")
const viewcourses=require("./course.route")
const department=require("./deparments.route")
const users=require("./users.route")
const dashboard=require("./dashboard.routes")
const router = express.Router();

router.use("/hod", HODmange);
router.use("/viewCourse", viewcourses)
router.use("/department",department)
router.use("/image",require("./client-image.route"))
router.use("/users",users)
router.use("/dashboard",dashboard)



module.exports = router;
