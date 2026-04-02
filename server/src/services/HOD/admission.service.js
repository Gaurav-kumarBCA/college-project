const Admission=require("../../models/admissions");

const getAdmissionFormDB = async () => {
  return await Admission.find();
};

const admissionFormDB = async (body) => {
  const exist = Admission.findOne({ user: body.user });
  if (exist) {
    throw new Error("Admisson form already filled by student");
  }
  const admission = new Admission(body);
  await admission.save();
  return Admission.findById(admission);
};


const getFullInfoDB = async({id})=>{
  const data = await Admission.findById({ _id :id });
  return  data;
}

module.exports = { getAdmissionFormDB, admissionFormDB ,getFullInfoDB};
