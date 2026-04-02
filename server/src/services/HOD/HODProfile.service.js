const HOD = require("../../models/hod");
const User = require("../../models/user");
const ProfileImage = require("../../models/Image");

const getHODProfileDB = async (id) => {
  const getHOD = await HOD.findById(id);
  return getHOD;
};

const getAllUsersDB = async () => {
  return await User.find({ role: "user" }).select("user email role name ");
};

const addImageDB = async (data) => {
  return await ProfileImage.insertOne(data);
};

const deleteImageDB = async (public_id) => {
  return await ProfileImage.deleteOne(public_id);
};

module.exports = { getHODProfileDB, getAllUsersDB, addImageDB ,deleteImageDB };
