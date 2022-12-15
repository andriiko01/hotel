const mongoose = require("mongoose");

const roomTypeSchema = new mongoose.Schema({
  name: { type: String, default: null },
  rating: { type: Number, default: null },
});

module.exports = mongoose.model("roomType", roomTypeSchema);
