const Admission = require("../../models/admission");

const getAdmissionFormDB = async (userId) => {
    console.log(userId)
    return await Admission.findOne({user: userId});
}

const admissionFormDB = async (body) => {
    const admission = new Admission(body);
    await admission.save();
    return Admission.findById(admission._id);
}

module.exports = {getAdmissionFormDB, admissionFormDB}