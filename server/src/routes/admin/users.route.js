const express = require("express");
const { getusers } = require("../../controllers/admin/user.controllers");

const router = express.Router();

router.get("/",getusers);


module.exports=router;
