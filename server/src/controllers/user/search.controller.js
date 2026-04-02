const { searchCourseDB } = require("../../services/user/search.service");

const searchCourse = async (req, res) => {
    const {keyword} = req.query;
    if (!keyword || keyword.trim() === "") {
      return res.status(400).json({
        success: false,
        error: "Please enter the course name",
      });
    }

    try {
        const data = await searchCourseDB(keyword);
        if(!data){
            return res.status(404).json({
                success:false,
                error:"Course not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Course fetched successfully",
            data:data
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            error:"Server Error"
        })
    }
}

module.exports = {searchCourse}