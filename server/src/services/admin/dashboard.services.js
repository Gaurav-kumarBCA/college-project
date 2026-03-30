const Course = require("../../models/course");
const department = require("../../models/department");
const HOD = require("../../models/hod");
const User = require("../../models/user");

const getDashboardDB=async()=>{
const totalCourses=await Course.countDocuments();
const totalHods=await HOD.countDocuments();
const totalDepartments=await department.countDocuments();
const totalUsers=await User.countDocuments({role:"user"});
const courses=await Course.find().select("courseName  duration")
return {
    totalCourses,totalHods,totalDepartments,totalUsers,courses
}
}
module.exports={getDashboardDB}