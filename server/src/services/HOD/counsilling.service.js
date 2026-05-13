const Counselling = require("../../models/counselling");

const getEnrollmentDB = async () => {
  const getData = Counselling.find();
  return await getData;
};

const deleteCounsillingDB = async (id) => {
  return await Counselling.findByIdAndDelete(id);
};

module.exports = { getEnrollmentDB , deleteCounsillingDB };