const { getAllCourseDB } = require("../../services/admin/coures.service");

const getAllCourse=async(req,res)=>{
    try {
    const data=await getAllCourseDB();
    if(!data){
        return res.status(402).json({
            success:false,
            error:"courses not founded!"
        });
    }
    return res.status(201).json({
        success:true,
        message:"course fetch successfully",
        data:data,
    })
    } catch (error) {
    return res.status(500).json({
        success:false,
        error:"something went wrong"
    })
    }
};

module.exports={getAllCourse};