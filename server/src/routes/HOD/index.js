const express = require("express");


const courses = require("./course.route");
const addCourse = require("./course.route");
const updatedCourse = require("./course.route");
const coursedelete = require("./course.route");
const HODdetail = require("./departmentdetail.route");

const router = express.Router();

router.use("/getcourse", courses);
router.use("/addcourse", addCourse);
router.use("/updatecourse", updatedCourse);
router.use("/delete", coursedelete)

router.use("/departmentdetail", HODdetail);

module.exports = router;