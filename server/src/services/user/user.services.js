const User=require("../../models/user");

const signupdb=async(body)=>{
    const newuser=new User(body);
    await newuser.save();
    return newuser;
};

const logindb=async(email)=>{
    const user=await User.findOne({email});
    return user;
}


module.exports={signupdb,logindb}