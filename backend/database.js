const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Connect to other MainDB
const connection1 = mongoose.createConnection(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log("Connected to MainDB");
  }
);

// Export connection
module.exports = {
  connection1
};
