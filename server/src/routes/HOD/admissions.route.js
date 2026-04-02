const express = require("express");
const { getAdmissionForm, getFullInfo } = require("../../controllers/HOD/admission.controller");
const router = express.Router();

router.get("/", getAdmissionForm);
router.get("/:id",getFullInfo)

module.exports = router;
