const Deparment = require("../../models/department")

const departmentDetailDB = async (departmentInfo) => {
    const department = new Deparment(departmentInfo);
    return department.save();
}

module.exports = {departmentDetailDB}