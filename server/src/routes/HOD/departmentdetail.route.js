const express =  require("express");
const { departmentDetail } = require("../../controllers/HOD/departmentdetail.controller");

const router = express.Router();

router.post("/", departmentDetail);

module.exports = router;