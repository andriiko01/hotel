const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  roomId: { type: String, default: null },
  dateStart: { type: Date, default: null },
  dateEnd: { type: Date, default: null },
  customerName: { type: String, default: null },
  customerEmail: { type: String, default: null },
  customerPhone: { type: String, default: null },
});

module.exports = mongoose.model("order", orderSchema);
