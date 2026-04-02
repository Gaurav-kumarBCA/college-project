const {
  PublicgetAllCoursesDB,
  courseDetailDB,
} = require("../services/public.services");

const courseDetail = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await courseDetailDB(id);
    if (!data) {
      return res.status(404).json({
        success: false,
        error: "Data not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Course details fetched successfully",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      error: "Something went wrong",
    });
  }
};

const publicgetAllCourses = async (req, res) => {
  const limit = parseInt(req.query.limit);
  // console.log(limit)
  try {
    let data = await PublicgetAllCoursesDB();
    // console.log(data)
    if (!data) {
      return res.status(404).json({
        success: false,
        error: "Data not found",
      });
    }

    if (limit && data.length > limit) {
      data = data.slice(0, limit);
    }
    // console.log(data)
    res.status(200).json({
      success: true,
      message: "Fetch data Successfully",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "Something Went wrong",
    });
  }
};

// <<<<<<< HEAD
// <<<<<<< HEAD
// module.exports={publicgetAllCourses }
// =======
// module.exports = { publicgetAllCourses };
// >>>>>>> gaurav-section
// =======
module.exports = { publicgetAllCourses, courseDetail };
// >>>>>>> lokesh
