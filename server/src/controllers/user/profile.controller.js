const { profileDB } = require("../../services/user/profile.service");

const profile= async(req,res)=>{
const {id}=req.user;
const data=await profileDB(id);
return res.json({
    success:true,
    data
});

}
module.exports={profile}