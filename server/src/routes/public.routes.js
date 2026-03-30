const express=require("express");
const { publicgetAllCourses,  } = require("../controllers/public.controller");
const router=express.Router();

router.get("/courses",publicgetAllCourses);


module.exports=router;