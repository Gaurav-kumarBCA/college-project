const express = require("express");
const { getCounselling ,deleteCounsilling} = require("../../controllers/HOD/counsilling.controller");

const router = express.Router();

router.get("/", getCounselling);
router.delete("/:id",deleteCounsilling);

module.exports = router;

