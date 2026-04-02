const express = require("express");
const courses = require("./course.route");
const addCourse = require("./course.route");
const updatedCourse = require("./course.route");
const coursedelete = require("./course.route");
const HODdetail = require("./counsilling.route");
const {  getAllUsers, getHODProfile } = require("../../controllers/HOD/HODProfile.controller");
const authMiddleware = require("../../middleware/auth.middleware");
const counselling=require("./counsilling.route");
const admissions =require("./admissions.route");

const router = express.Router();


router.get("/getProfile",authMiddleware,getHODProfile);
router.get("/users",getAllUsers);
router.use("/getcourse", courses);
router.use("/addcourse", addCourse);
router.use("/counselling", counselling);
router.use("/admissions",admissions);
router.use("/updatecourse", updatedCourse);
router.use("/delete", coursedelete);


router.use("/departmentdetail", HODdetail);

module.exports = router;