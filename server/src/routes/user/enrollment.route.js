const express=require("express");
const { enrollment, getEnrollment } = require("../../controllers/user/enrollment.controller");

const router=express.Router();

router.post("/", counselling);


module.exports=router;