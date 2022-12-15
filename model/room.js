const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: { type: String, default: null },
  roomTypeId: { type: String, default: null },
  employeeId: { type: String, default: null },
  beds: { type: Number, default: null },
  price: { type: Number, default: null },
});

module.exports = mongoose.model("room", roomSchema);
