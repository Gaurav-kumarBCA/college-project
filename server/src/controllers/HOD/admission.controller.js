const {getAdmissionFormDB,getFullInfoDB,admissionFormDB,DelteAdmissionDB,} = require("../../services/HOD/admission.service");
const mongoose=require("mongoose")

const getAdmissionForm = async (req, res) => {
  try {
    const data = await getAdmissionFormDB();

    if (!data) {
      return res.status(500).json({
        success: false,
        error: "Admission form not found",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Admission form fetched successfully",
      data: data,
    });
  } catch (error) {
    console.error("Get Admission Error:", error);
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

const admissionForm = async (req, res) => {
  try {
    const admissionData = { ...req.body, user: req.user.id };

    const data = await admissionFormDB(admissionData);

    if (!data) {
      return res.status(404).json({
        success: false,
        error: "Something went wrong",
      });
    }
    return res.status(201).json({
      success: true,
      message: "Admission form submitted successfully",
      data: data,
    });
  } catch (error) {
    console.error("Admission Error:", error.message);

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        error: "Admission form already submitted",
      });
    }

    return res.status(500).json({
      success: false,
      error: error.message || "Server error",
    });
  }
};

const getFullInfo = async (req, res) => {
  const { id } = req.params;
 
  if (!id) {
    return res.status(500).json({
      success: false,
      error: "Id is required",
    });
  }

  try {
    const data = await getFullInfoDB({ id });
    if (!data) {
      return res.status(404).json({
        success: false,
        error: "Data not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "information fetch successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "something went wrong",
    });
  }
};

const DelteAdmission= async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      error: "Invalid admission Id",
    });
  }
  try {
    const AdmissionDelete = await DelteAdmissionDB(id);
  
    // if (!AdmissionDelete) {
    //   return res.status(404).json({
    //     success: false,
    //     error: " Something went wrong while deleting",
    //   });
    // }
    
    return res.status(200).json({
      success: true,
      message: "Admission deleted successfully",
      data: AdmissionDelete,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
};


module.exports = {getAdmissionForm,admissionForm,getFullInfo,DelteAdmission};
