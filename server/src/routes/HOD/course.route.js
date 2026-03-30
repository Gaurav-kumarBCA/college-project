const express = require("express");
const { course, getCourse, updateCourse, deleteCourse } = require("../../controllers/HOD/course.controller");
const router = express.Router();

router.get("/", getCourse)
router.post("/", course);
router.patch("/:id", updateCourse);
router.delete("/:id", deleteCourse)

module.exports = router;