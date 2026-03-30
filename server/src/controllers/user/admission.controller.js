const {
  admissionFormDB,
  getAdmissionFormDB,
} = require("../../services/user/admission.service");

const getAdmissionForm = async (req, res) => {
  try {
    const data = await getAdmissionFormDB(req.user.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        error: "Admission form not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Admission form fetched successfully",
      data: data
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

    const admissionData = {
      ...req.body,  
      user: req.user.id  
    };


    const data = await admissionFormDB(admissionData);

    if(!data){
      return res.status(404).json({
        success:false,
        error:"Something went wrong"
      })
    }
    return res.status(201).json({
      success: true,
      message: "Admission form submitted successfully",
      data: data
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

module.exports = {
  getAdmissionForm,
  admissionForm,
};
