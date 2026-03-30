const User=require("../../models/user")
const profileDB=async(id)=>{
    const user=await User.findById(id);
    return user;
}
module.exports={profileDB} 