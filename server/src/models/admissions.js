const mongoose = require("mongoose");
const User = require("./user");

const admissionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    courseAppliedFor: { type: String, required: true },
    collegeName: { type: String, default: "" },
    fullName: { type: String, required: true },
    dob: { type: Date, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    guardianName: { type: String, default: "" },
    postalAddress: { type: String, required: true },
    pinCode: { type: String, required: true },

    permanentAddress: { type: String, default: "" },
    phoneNo: { type: String, default: "" },
    parentPhoneNo: { type: String, default: "" },
    studentPhoneNo: { type: String, default: "" },

    highSchool: {
      exam: { type: String, default: "10th" },
      board: { type: String, default: "" },
      school: { type: String, default: "" },
      rollNo: { type: String, default: "" },
      subject: { type: String, default: "" },
      marksobtained: { type: Number, default: 0 },
      maxMarks: { type: Number, default: 600 },
      percentage: { type: String, default: "" },
      yearofPassing: { type: Number, default: 0 },
    },

    intermediate: {
      exam: { type: String, default: "12th" },
      board: { type: String, default: "" },
      school: { type: String, default: "" },
      rollNo: { type: String, default: "" },
      subject: { type: String, default: "" },
      marksobtained: { type: Number, default: 0 },
      maxMarks: { type: Number, default: 500 },
      percentage: { type: String, default: "" },
      yearofPassing: { type: Number, default: 0 },
    },

    graduation: {
      exam: { type: String, default: "Graduation" },
      board: { type: String, default: "" },
      school: { type: String, default: "" },
      rollNo: { type: String, default: "" },
      subject: { type: String, default: "" },
      marksobtained: { type: Number, default: 0 },
      maxMarks: { type: Number, default: 0 },
      percentage: { type: String, default: "" },
      yearofPassing: { type: Number, default: 0 },
    },

    documents: {
      hostel: { type: String, enum: ["Yes", "No"], default: "No" },
      aadharCard: { type: String, default: "" },
      transport: { type: String, enum: ["Yes", "No"], default: "No" },
      transportAddress: { type: String, default: "" },
    },

    documentImage: {
      photo: { type: String, default: "" },
      marksheet10: { type: String, default: "" },
      marksheet12: { type: String, default: "" },
      aadharCard: { type: String, default: "" },
      studentSignature: { type: String, default: "" },
      parentSignature: { type: String, default: "" },
    },

    parent: [
      {
        name: { type: String, default: "" },
        place: { type: String, default: "" },
        date: Date,
        address: { type: String, default: "" },
      },
    ],

    studentInfo: [
      {
        name: { type: String, default: "" },
        place: { type: String, default: "" },
        date: Date,
      },
    ],

    // eligible: {
    //   type: String,
    //   enum: ["Pending", "Approved", "Rejected"],
    //   default: "Pending"
    // },

    submittedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Admission", admissionSchema);
