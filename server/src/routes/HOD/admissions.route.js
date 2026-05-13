const express = require("express");
const { getAdmissionForm, getFullInfo,DelteAdmission} = require("../../controllers/HOD/admission.controller");
const router = express.Router();

router.get("/", getAdmissionForm);
router.get("/:id",getFullInfo)
router.delete("/:id",DelteAdmission)

module.exports = router;
