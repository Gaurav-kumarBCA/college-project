const {  getAllUsersDB, getHODProfileDB, addImageDB, deleteImageDB } = require("../../services/HOD/HODProfile.service");

const getHODProfile = async (req, res) => {
  const { id } = req.user;
  try {
    const data=await getHODProfileDB(id);
    return res.status(200).json({
      success:true,
      message:"HOD details fetched successfully",
      data:data
    })
  } catch (error) {
    return res.status(401).json({success:false,error:"something went wrong "});
  }
}


const getAllUsers=async(req,res)=>{
  try {
  const data=await getAllUsersDB();

  return res.status(200).json({
    success:true,
    message:"fetched all users successfully",
    data:data
  })

  } catch (error) {
  console.log(error);
  }
}

const addImage=async(req,res)=>{
  const {body}=req.body;

  if(!body){
    return res.status(400).json({
      success:false,
      error:"all fields are required",
      required:["ProfileImage"]
    })
  }

  try {
  const data=await addImageDB(body);

  return res.status(200).json({
    success:true,
    message:"add Image successfully",
    data:data
  })

  } catch (error) {
    console.log(error);
    return res.status(500).json({success:false,
      error:"something went wrong"
    })
  }
}

const deleteImage=async()=>{
  const {public_id}=req.body;

  if(!public_id){
    alert("public_id is required")
  }

  try {
  const data=await deleteImageDB(public_id);
  return res.status(200).json({
    success:true,
    message:"Image delete susccessfully",
    data:data
  })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success:false,
      error:"something went wrong"
    })
  }

}

module.exports = { getHODProfile ,getAllUsers,addImage,deleteImage};
