const User = require("../../models/user");

const getAllusersDB=async()=>{
    return await User.find({}).select("email name role ");
};



module.exports={getAllusersDB};