const mongoose = require("mongoose");
const { connection1 } = require("../database");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 5
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  token: {
    type: String,
    required: true,
    max: 1024
  }
});

module.exports = connection1.model("User", userSchema);
