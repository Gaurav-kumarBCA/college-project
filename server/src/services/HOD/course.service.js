const Course = require("../../models/course")

const getCourseDB = async () => {
    return await Course.find();
}

const courseDB = async (courseInfo) => {
    const couseData =new Course(courseInfo);
    const couse=  await couseData.save();
    return couse;
}

const updateCourseDB = async (id, updatedBody) => {
    return await Course.findByIdAndUpdate(id, updatedBody, {new:true})
}

const deleteCourseDB = async (id) =>{
    return await Course.findByIdAndDelete(id);
}

module.exports = {getCourseDB, courseDB, updateCourseDB,deleteCourseDB}