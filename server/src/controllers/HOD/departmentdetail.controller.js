const { departmentDetailDB } = require("../../services/HOD/departmentdetail.service");

const departmentDetail = async (req , res) => {
    const departmentInfo = req.body;
    if(!departmentInfo){
        return res.status(409).json({
            success:false,
            error:"Something went wrong",
            data: ["departmentName", "description", "HODName"]
        })
    }
    try {
        const data = await departmentDetailDB(departmentInfo);
        if(!data){
            return res.status(404).json({
                success:false,
                error:"Something went wrong"
            });
        }
        return res.status(201).json({
            success:true,
            message:"HOD assign successfully",
            data: data,
        })
    } catch (error) {
        console.log(error);
        return res.status(404).json({
            success:false,
            error: "Something went wrong"
        });
    }
}

module.exports = {departmentDetail}