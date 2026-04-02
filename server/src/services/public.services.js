const Course = require("../models/course");

const courseDetailDB = async (id) => {
    // console.log(id)
    return await Course.findOne({_id: id});
}

const PublicgetAllCoursesDB=async()=>{
    const data=await Course.find();
    return data;

}

module.exports={PublicgetAllCoursesDB, courseDetailDB}