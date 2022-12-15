const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, default: null },
  salary: { type: Number, default: null },
});

module.exports = mongoose.model("employee", employeeSchema);
