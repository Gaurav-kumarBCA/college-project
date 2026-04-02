const express=require("express");
const { getAlldepartment } = require("../../controllers/admin/department.controllers");

const router=express.Router();

router.get("/",getAlldepartment);

module.exports= router