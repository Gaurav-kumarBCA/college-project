const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    img: {
      type: [String], // multiple images
      required: true,
    },

    tags: {
      type: [String], // dynamic tags
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Image", imageSchema);