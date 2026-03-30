const {
  enrollmentServiceDB,
} = require("../../services/user/enrollment.service");

const enrollment = async (req, res) => {
  const { name, email, phone, course, qualification, passing_year } = req.body;
  // console.log(req.body, "body");

  if (!name || !email || !phone || !course || !qualification || !passing_year) {
    return res.status(400).json({
      success: false,
      error: "all fields are required",
      required: [
        "name",
        "email",
        "phone",
        "course",
        "qualification",
        "passing_year",
      ],
    });
  }

  try {
    const data = await enrollmentServiceDB({
      name,
      email,
      phone,
      course,
      qualification,
      passing_year,
    });
    return res.status(201).json({
      message: "User enroll successfully",
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Student already enrolled",
      });
    }
    return res.status(500).json({
      success: false,
      error: "something went wrong",
    });
  }
};

const getEnrollment = async (req, res) => {
  try {
    const enrolldata = await getEnrollmentDB();
    return res.status(200).json({
      message: "data get successfully",
      success: true,
      data: enrolldata,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      error: "something went wrong",
    });
  }
};

module.exports = { enrollment, getEnrollment };
