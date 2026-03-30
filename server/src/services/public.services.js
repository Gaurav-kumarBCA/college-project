const Course = require("../models/course");
const department = require("../models/department");
const User = require("../models/user");

const courseDetailDB = async (id) => {
    // console.log(id)
    return await Course.findOne({_id: id});
}

const PublicgetAllCoursesDB=async()=>{
    const data=await Course.find();
    return data;

}

module.exports={PublicgetAllCoursesDB, courseDetailDB}
