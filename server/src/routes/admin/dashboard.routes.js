const express=require("express");
const { getDashboard } = require("../../controllers/admin/dashbord.controllers");
const router=express.Router();
router.get("/",getDashboard);
module.exports=router;