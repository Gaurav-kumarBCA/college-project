const Image = require("../../models/client-side-image");

const CreateImagesDB = async (img, tags) => {
  const validTags = Array.isArray(tags)
    ? tags.filter(tag => tag.trim() !== "")
    : [];

  const data = new Image({
    img,
    tags: validTags
  });

  await data.save();
  return data;
};

const getAllImagesDB=async()=>{
    return await Image.find();
}


const UpdateImagesDB=async(id,updatedimg)=>{
    return await Image.findByIdAndUpdate(id,updatedimg,{new:true});
}


const deleteImagesDB= async(id)=>{
return await Image.findByIdAndDelete(id)
}
module.exports={CreateImagesDB,getAllImagesDB,UpdateImagesDB,deleteImagesDB}
