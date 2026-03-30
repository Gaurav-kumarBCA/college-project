// const HOD = require("../../models/hodassign");
const User = require("../../models/user");

const HODloginDB = async (email) => {
    return await User.findOne(email);
}

module.exports = HODloginDB;