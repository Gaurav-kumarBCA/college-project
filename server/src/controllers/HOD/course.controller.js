const { default: mongoose } = require("mongoose");
const { courseDB, getCourseDB, updateCourseDB, deleteCourseDB } = require("../../services/HOD/course.service");

const getCourse = async (req, res) => {
    try {
        const courses = await getCourseDB();
        if(!courses){
            return res.status(500).json({
                success:false,
                error:"Please register a course"
            })
        }
        return res.status(200).json({
            success:true,
            messsage:"courses fetched successfully",
            data: courses
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            error:"Courses not found"
        })
    }
} 

const course = async (req, res) => {
    const courseInfo = req.body;
    console.log(courseInfo);
    if(!courseInfo){
        return res.status(400).json({
            success:false,
            error:"Please enter all fields",
            required: ["courseName", "fees", "duration", "eligibility", "isActive", "description"],
        })
    }
    try {
        const data = await courseDB(courseInfo);
        if(!data){
            return res.status(404),json({
                success:false,
                error:"Something went wrong!"
            });
        }
        return res.status(200).json({
            success:true,
            message:"Course add successfully",
            data:data,
        });
    } catch (error) {
        if(error.code === 11000){
            return res.status(409).json({
                success:false,
                error:"Course is already exist"
            })
        }
        console.log(error);
        res.status(500).json({
            success:false,
            error: "Something went wrong!"
        })
    }
}

const updateCourse = async (req, res) => {
    const {id} = req.params;
    const updatedBody = req.body;
    console.log(id, updatedBody,"id");

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            success:false,
            error:"Invalid id"
        })
    }

    if(!updatedBody || Object.keys(updatedBody) === 0){
        return res.status(404).json({
            success:false,
            error:"Changes missing"
        })
    }
    try {
        const updateCourse = await updateCourseDB(id, updatedBody);
        console.log(updateCourse,"hi update course");
        if(!updateCourse){
            return res.status(404).json({
                success:false,
                error:"Changes are not recieved"
            });
        }

        return res.status(200).json({
            success:true,
            message:"Course updated successfully",
            data:updateCourse
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            error:"Something went wrong"
        })
    }
};

const deleteCourse = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            success: false,
            error: "Invalid course Id"
        });
    }
    try {
        const courseDelete = await deleteCourseDB(id);
        console.log(courseDelete,"klmno");
        if(!courseDelete){
            return res.status(404).json({
                success: false,
                error:" Something went wrong while deleting"
            });
        }
        return res.status(200).json({
            success:true,
            message:"Course deleted successfully",
            data:courseDelete
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            error:"Something went wrong"
        })
    }
};

module.exports = {getCourse, course, updateCourse, deleteCourse}