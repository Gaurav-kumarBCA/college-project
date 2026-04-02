const express = require("express");
const { getAdmissionForm, admissionForm } = require("../../controllers/user/admission.controller");
const router = express.Router();


router.get("/form", getAdmissionForm);
router.post("/", admissionForm)

module.exports = router;