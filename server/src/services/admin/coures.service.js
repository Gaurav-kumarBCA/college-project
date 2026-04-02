const Course = require("../../models/course");

const getAllCourseDB=async()=>{
    const course=await Course.find();
    return course;
};

module.exports={getAllCourseDB};