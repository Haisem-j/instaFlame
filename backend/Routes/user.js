// Deals with user posts

const router = require("express").Router();
const verify = require("../verifyToken");
const mongoose = require("mongoose");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const multer = require("multer");
const crypto = require("crypto");
const path = require("path");
const dotenv = require("dotenv");
const { connection1 } = require("../database");
const Post = require('../models/Post');


dotenv.config();

// Initialize gfs
let gfs;
connection1.once("open", () => {
  gfs = Grid(connection1.db, mongoose.mongo);
  gfs.collection("uploads");
  console.log("GFS connected");
});

// Create Storage Engine
const storage = new GridFsStorage({
  url: process.env.DB_CONNECT,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads"
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

router.get("/test", verify, (req, res) => {
  res.json(req.body);
});

// Route POST uploads single file 
// Creates Post entry in database

router.post("/upload", upload.single('file') , (req, res) => {
    console.log(req.file.filename);
    res.redirect("http://localhost:3000/home");

});

module.exports = router;
