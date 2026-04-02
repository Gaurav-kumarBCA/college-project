const express = require("express");
const { createHOD, deleteHOD, getAllHOD } = require("../../controllers/admin/createhod.controller");
const router = express.Router();

router.get("/",getAllHOD)
router.post("/", createHOD);
router.delete("/:id", deleteHOD);


module.exports = router;