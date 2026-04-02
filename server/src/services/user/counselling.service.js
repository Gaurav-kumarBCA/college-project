const Counselling = require("../../models/counselling");

const enrollmentServiceDB = async (body ) => {
  const enroll = new Counselling(body);
   await enroll.save();

   return Counselling.findById(enroll._id);
};

const getEnrollmentDB=async()=>{
  const getData=Counselling.find();
  return await getData;
}

module.exports = { enrollmentServiceDB,getEnrollmentDB };