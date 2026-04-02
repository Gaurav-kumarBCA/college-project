const HOD = require("../../models/hod");

const HODloginDB = async (email) => {
    return await HOD.findOne({email});
}

module.exports = HODloginDB;