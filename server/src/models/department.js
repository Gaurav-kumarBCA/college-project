const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    departmentName:{type:String, required:true, Unique:true},
    description:{type:String, required:true},
    HODName:{type:String, required:true}
}, {timestamps:false});

const department = new mongoose.model("department", departmentSchema);

module.exports = department;