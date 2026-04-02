const Course = require("../../models/course");
const HOD = require("../../models/hod");
const User = require("../../models/user");

const getDashboardDB=async()=>{
const totalCourses=await Course.countDocuments();
const totalHods=await HOD.countDocuments();
const totalUsers=await User.countDocuments({role:"user"});
const courses=await Course.find().select("courseName  duration")
return {
    totalCourses,totalHods,totalUsers,courses
}
}
module.exports={getDashboardDB}