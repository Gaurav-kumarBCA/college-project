const { getEnrollmentDB, deleteCounsillingDB } = require("../../services/HOD/counsilling.service");

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

const deleteCounsilling = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteEnroll = await deleteCounsillingDB(id);
    return res.status(200).json({
      success: true,
      message: "Counsilling deleted successfully",
      data: deleteEnroll,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};


module.exports={getCounselling, deleteCounsilling};