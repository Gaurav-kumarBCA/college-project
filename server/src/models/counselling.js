const mongoose = require("mongoose");

const counsellingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    course: { type: String, required: true },
    qualification: { type: String, required: true },
    passing_year: { type: Number, required: true },
  },
  { timestamps: true }
);

const Counselling = mongoose.model("Counselling", counsellingSchema);

module.exports = Counselling;
