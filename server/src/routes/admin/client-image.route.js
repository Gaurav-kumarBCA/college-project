const express=require('express');
const { CreateImages, getAllImages, UpdateImages, deleteImages } = require('../../controllers/admin/client-image.controllers');

const router=express.Router();

router.post("/",CreateImages);
router.get("/",getAllImages);
router.put("/:id",UpdateImages);
router.delete("/:id",deleteImages);

module.exports=router;