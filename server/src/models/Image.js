const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  url: { type: String, required: true },
  public_id: { type: String, required: true },
});

const Image= mongoose.model("ProfileImage", ImageSchema);
module.exports = Image;
