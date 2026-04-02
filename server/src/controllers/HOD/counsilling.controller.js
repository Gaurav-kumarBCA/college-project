const { getEnrollmentDB } = require("../../services/HOD/counsilling.service");

const getCounselling = async (req, res) => {
  try {
    const enrolldata = await getEnrollmentDB();
    return res.status(201).json({
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
module.exports={getCounselling};