const User = require("../../models/user");

const deleteUserDB = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports={deleteUserDB}