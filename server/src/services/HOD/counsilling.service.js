const Counselling = require("../../models/counselling");

const getEnrollmentDB = async () => {
  const getData = Counselling.find();
  return await getData;
};

module.exports = { getEnrollmentDB };