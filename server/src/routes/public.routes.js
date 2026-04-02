const express=require("express");
const { publicgetAllCourses, courseDetail,  } = require("../controllers/public.controller");
const {searchCourse} = require("../controllers/user/search.controller")
const router=express.Router();

router.get("/coursedetail/:id", courseDetail);
router.use("/image",require("./client-image.route"))
router.get("/search", searchCourse )
router.get("/courses",publicgetAllCourses);


module.exports=router;