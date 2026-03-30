const Course = require("../../models/course");

const searchCourseDB = async (keyword) => {
  try {
    if (!keyword) return [];

    const cleanKeyword = keyword.trim();

    const result = await Course.find({
      $or: [
        { courseName: { $regex: cleanKeyword, $options: "i" } },
        { description: { $regex: cleanKeyword, $options: "i" } },
      ],
    });

    return result;

  } catch (error) {
    console.log("Search Error:", error);
    throw error;
  }
};

module.exports = { searchCourseDB };