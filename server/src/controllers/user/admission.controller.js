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
        error: "Something went wrong",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Admission form fetched successfully",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

const admissionForm = async (req, res) => {
//   const body = req.body;
  if (!req.body.courseAppliedFor || !req.body.fullName) {
    return res.status(400).json({
      success: false,
      error: "All fields required",
      require: [
        "courseAppliedFor",
        "collegeName",
        "fullName",
        "dob",
        "fatherName",
        "motherName",
        "guardianName",
        "courseAppliedFor",
        "postalAddress",
        "pinCode",
        "permanentAddress",
        "phoneNo",
        "parentPhoneNo",
        "studentPhoneNO",
        "exam",
        "board",
        "school",
        "rollNo",
        "subject",
        "marksobtained",
        "maxMarks",
        "percentage",
        "yearofPaasing",
        "hostel",
        "photoURL",
        "marksheet10",
        "marksheet12",
        "aadharCard",
        "transport",
        "transportAddress",
        "perentSignatureURL",
        "place",
        "name",
        "date",
        "address",
        "signatureURL",
        "name",
        "place",
        "date",
      ],
    });
  }

  try {
    const data = await admissionFormDB({ ...req.body, user: req.user.id });
    if (!data) {
      return res.status(404).json({
        success: false,
        error: "Something went wrong",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Admission form filled successfully",
      data: data,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        error: "Admission form already filled",
      });
    }
    console.log(error);
  }
};

module.exports = { getAdmissionForm, admissionForm };
