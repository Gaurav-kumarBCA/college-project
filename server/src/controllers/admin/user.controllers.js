const { getAllusersDB } = require("../../services/admin/users.service");

const getusers=async(req,res)=>{
    const data=await getAllusersDB();
    return res.json({
        success:true,
        message:"get all student successfully",
        data:data
    })
}

module.exports={getusers};