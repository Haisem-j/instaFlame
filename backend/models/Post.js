const mongoose = require("mongoose");
const { connection1 } = require("../database");


const postSchema = new mongoose.Schema({
  imageId: {
    type: String,
    required: true
  },
  profileId: {
    type: String,
    required: true
  },
  desc: {
    type: String,
  },
  likes: {
    type: Number
  }
});

module.exports = connection1.model("Post", postSchema);
