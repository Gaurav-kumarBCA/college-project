const Counselling = require("../../models/counselling");
require("../../models/course");
require("../../models/user");

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