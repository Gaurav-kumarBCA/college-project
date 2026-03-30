const express=require("express");
const { counselling, getCounselling } = require("../../controllers/user/counselling.controller");

const router=express.Router();

router.post("/",counselling);
router.get("/",getCounselling);

module.exports=router;