const { PublicgetAllCoursesDB } = require("../services/public.services");

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

module.exports = { publicgetAllCourses };
