const { getAlldepartmentDB } = require("../../services/admin/departments.service");

const getAlldepartment=async(req,res)=>{
    try {
    const data=await getAlldepartmentDB();
    if(!data){
        return res.status(402).json({
            success:false,
            error:"deparment not found"
        });
    }
    return res.status(201).json({
        success:true,
        data:data
    })
    } catch (error) {
    return res.status(500).json({
        success:false,
        error:"something went wrong"
    })
    }
};

module.exports={getAlldepartment};
