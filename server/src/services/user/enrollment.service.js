const Enrollment = require("../../models/enrollment");
require("../../models/course");
require("../../models/user");

const enrollmentServiceDB = async (body ) => {
  const enroll = new Enrollment(body);
   await enroll.save();

   return Enrollment.findById(enroll._id);
};

const getEnrollmentDB=async()=>{
  const getData=Enrollment.find({});
  return await getData;
}

module.exports = { enrollmentServiceDB,getEnrollmentDB };