const { getDashboardDB } = require("../../services/admin/dashboard.services")

const getDashboard=async(req,res)=>{
    try {
        const data=await getDashboardDB();
    if(!data){
        res.status(402).json({
            success:false,
            error:"Dashboard data not found"
        });
    }

    res.status(201).json({
        success:true,
        message:"Dashboard Data Fetch Successfully",
        data:data
    })
    } catch (error) {
        console.log(error);
      res.status(500).json({
        success:false,
        error:"Somthing went wrong"
      })  
    }
}
module.exports={getDashboard}