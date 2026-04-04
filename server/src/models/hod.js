const mongoose = require("mongoose");

const HODSchema = new mongoose.Schema(
  {
    hodName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    department: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["HOD"] },
  },
  { timestamps: false },
);

const HOD = mongoose.model("HOD", HODSchema);

module.exports = HOD;
