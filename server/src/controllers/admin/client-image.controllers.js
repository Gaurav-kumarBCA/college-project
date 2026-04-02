const { default: mongoose } = require("mongoose");
const { CreateImagesDB, getAllImagesDB, UpdateImagesDB, deleteImagesDB } = require("../../services/admin/client-image.service");
// const { Mongoose } = require("mongoose");

const CreateImages = async (req, res) => {
  const { img, tags } = req.body;

  if (!img || img.length === 0) {
    return res.status(400).json({
      success: false,
      error: "Images required",
    });
  }

  if (!tags || tags.length === 0) {
    return res.status(400).json({
      success: false,
      error: "Tags required",
    });
  }

  try {
    const data = await CreateImagesDB(img, tags);

    res.status(201).json({
      success: true,
      message: "Saved successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};
const getAllImages = async(req, res) => {
    try {
      const data=await getAllImagesDB();
      if(!data){
        return res.status(404),json({
          success:false,
          error:"data NOt Found"
        })
      }
      res.status(200).json({
        success:true,
        message:"Data fetch Successfully",
        data:data
      })
    } catch (error) {
      res.status(500).json({
        success:false,
        error:"Somthing went wrong"
      })
    }
};

const UpdateImages = async(req, res) => {
  const {id}=req.params;
  const updatedimg=req.body;

   if(!mongoose.Types.ObjectId.isValid(id)){
          return res.status(400).json({
              success:false,
              error:"Invalid id"
          })
      }

       if(!updatedimg || Object.keys(updatedimg) === 0){
        return res.status(404).json({
            success:false,
            error:"Changes missing"
        })
    }

try {
  const data= await UpdateImagesDB(id,updatedimg);
  if(!data){
    res.status(404).json({
      success:false,
      error:"Images not updated"
    })
  }
  res.status(200).json({
    success:true,
    message:"Images Updated Successfully"
  })
} catch (error) {
   res.status(500).json({
      success:false,
      error:"Something went wrong"
    })
}

};

const deleteImages = async(req, res) => {
  const {id}=req.params;
   if(!mongoose.Types.ObjectId.isValid(id)){
          return res.status(404).json({
              success: false,
              error: "Invalid course Id"
          });
      }
      try {
        const data= await deleteImagesDB(id);
        if(!data){
          res.status(404).json({
            success:false,
            error:"Images not Deleted"
          })
        }
        res.status(200).json({
          success:true,
          message:"Images Deleted Successfully"
        })
      } catch (error) {
         res.status(500).json({
            success:false,
            error:"Something went wrong"
          })
      }

};
module.exports = { CreateImages, getAllImages, UpdateImages, deleteImages }