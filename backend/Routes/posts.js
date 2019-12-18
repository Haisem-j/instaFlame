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
const Post = require("../models/Post");
const User = require("../models/User");

dotenv.config();
router.get("/test", async (req, res) => {});
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

// Route POST uploads single file
// Creates Post entry in database

router.post("/upload", verify, upload.single("file"), async (req, res) => {
  console.log(req.body.desc);
  console.log(req.file.filename);
  console.log(res.locals.user._id);
  const user = await User.findOne({ _id: res.locals.user._id });
  const post = new Post({
    imageId: req.file.filename,
    profileId: user.username,
    desc: req.body.desc,
    likes: 0
  });

  try {
    const savedPost = await post.save();
    res.json({ works: true });
  } catch (err) {
    res.json({ error: err });
  }
});

// Route GET retrieves all images and stores in array
router.get("/", verify, async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Route GET retrieves posts that have one profileId
router.get("/profile/:profileId", verify, async (req, res) => {
  try {
    const posts = await Post.find({ profileId: req.params.profileId });
    res.json(posts);
  } catch (error) {
    res.status(404).json;
  }
});

// // route GET image/:filename
// desc displays image

router.get("/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // CHeck if files
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exist"
      });
    }

    // check if file is image
    if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
      // Read Out put to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: "Not an image"
      });
    }
  });
});

// Route POST deletes single post
router.post("/del/:imageId", async (req, res) => {

  try {
    gfs.remove(
      { filename: req.params.imageId, root: "uploads" },
      (err, gridStore) => {
        if (err) {
          return res.status(404).json({
            err: err
          });
        }
      }
    );
    const post = await Post.findOneAndDelete({imageId: req.params.imageId})
    res.json({'Works': true})
  } catch (err) {
    res.json({"error": err})
  }
});


router.post('/like/:imageId', async (req,res)=>{
  try {
    const post = await Post.findOne({imageId: req.params.imageId});
    post.likes++;
    await post.save()
    res.json({'Works': true})

  } catch (err) {
    res.json({"error": err})

  }
})
module.exports = router;
