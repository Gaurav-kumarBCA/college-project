const express=require('express');
const { getAllCourse } = require('../../controllers/admin/course.controllers');

const router=express.Router();

router.get("/",getAllCourse);

module.exports=router;