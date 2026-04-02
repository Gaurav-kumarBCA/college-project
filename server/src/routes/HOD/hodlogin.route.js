const express=require("express");
const { HODLogin } = require("../../controllers/HOD/HODLogin.controller");

const router=express.Router();

router.post("/login", HODLogin);

module.exports=router;