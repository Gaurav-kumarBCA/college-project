const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName: {type:String, required:true, unique:true},
    fees:{type:Number, required:true},
    duration:{type:String, required:true},
    eligibility:{type:String, required:true},
    isActive:{type:Boolean, required: true},
    description:{type:String, required:true},
}, {timestamps:false});

const Course = new mongoose.model("Course", courseSchema);

module.exports = Course;