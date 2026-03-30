const department = require("../../models/department");

const getAlldepartmentDB=async()=>{
    const data=await department.find();
    return data;

};

module.exports={getAlldepartmentDB};