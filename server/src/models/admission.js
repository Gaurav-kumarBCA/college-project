const mongoose = require("mongoose");
const User = require("./user");

const educationSchema10 = new mongoose.Schema({
    exam:{type:String, required:true},
    board:{type:String, required:true},
    school:{type:String, required:true},
    rollNo:{type:String, required:true},
    subject:{type:String, required:true},
    marksobtained:{type:Number, required:true},
    maxMarks:{type:Number, required:true},
    percentage:{type:Number, required:true},
    yearofPassing:{type:Number, required:true},
    hostel:{type:String, enum:["Yes", "No"]}
});

const educationSchema12 = new mongoose.Schema({
    exam:{type:String, required:true},
    board:{type:String, required:true},
    school:{type:String, required:true},
    rollNo:{type:String, required:true},
    subject:{type:String, required:true},
    marksobtained:{type:Number, required:true},
    maxMarks:{type:Number, required:true},
    percentage:{type:Number, required:true},
    yearofPassing:{type:Number, required:true},
});

const documentSchema = new mongoose.Schema({
    photoURL:{type:String, required:true},
    marksheet10:{type:String},
    marksheet12:{type:String},
    aadharCard:{type:String, required:true},
    transport:{type:String, enum:["Yes", "No"]},
    transportAddress:{type:String}
});

const parentInfo = new mongoose.Schema({
    parentSignatureURL:{type:String, required:true},
    place:{type:String, required:true},
    name:{type:String, required:true},
    date:{type:Date},
    address:{type:String}
});

const finalStudentInfo = new mongoose.Schema({
    signatureURL:{type:String, required:true},
    name:{type:String, required:true},
    place:{type:String, required:true},
    date:{type:Date},
})

const admissionSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, ref:User, required:true },
    courseAppliedFor:{type:String, required:true},
    collegeName:{type:String, required:true},
    fullName:{type:String, required:true},
    dob:{type:Date, required:true},
    fatherName:{type:String, required:true},
    motherName:{type:String, required:true},
    guardianName:{type:String},
    // courseAppliedFor:{type:String, required:true},
    postalAddress:{type:String, required:true},
    pinCode:{type:String, required:true},
    permanentAddress:{type:String, required:true},
    phoneNo:{type:String, required:true},
    parentPhoneNo:{type:String},
    studentPhoneNo:{type:String},

    highSchool:[educationSchema10],
    interMediate:[educationSchema12],
    documents:[documentSchema],

    parent:[parentInfo],
    studentInfo:[finalStudentInfo],

    eligible:{
        type:String,
        enum:["Pending", "Approved", "Rejected"],
        default:"Pending"
    },

    submittedAt:{type:Date, default:Date.now}

}, {timestamps:true});

const Admission = new mongoose.model("Addmission", admissionSchema)

module.exports = Admission;