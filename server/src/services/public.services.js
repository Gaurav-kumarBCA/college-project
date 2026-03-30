const Course = require("../models/course");
const department = require("../models/department");
const User = require("../models/user");

const PublicgetAllCoursesDB=async()=>{
    const data=await Course.find();
    return data;

}

module.exports={PublicgetAllCoursesDB}