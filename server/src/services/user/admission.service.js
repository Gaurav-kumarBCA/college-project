const Admission = require("../../models/admission");

const getAdmissionFormDB = async (userId) => {
    // console.log(userId)
    return await Admission.findOne({user: userId});
}

const admissionFormDB = async (body) => {

    // const exist = Admission.findOne({user: body.user});
    // if(exist){
    //     throw new Error("Admisson form already filled by student")
    // }
    const admission = new Admission(body);
    await admission.save();
    return Admission.findById(admission);
}

module.exports = {getAdmissionFormDB, admissionFormDB}