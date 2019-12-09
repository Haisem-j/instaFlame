// Deals with authentication of users

const router = require("express").Router();
const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register Route
router.post("/register", async (req, res) => {
  // Validate User input/make sure it makes sense
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if user and email exists already
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email exists");

  const usernameExist = await User.findOne({ username: req.body.username });
  if (usernameExist) return res.status(400).send("Username exists");

  // Hash passwords

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create user from req.body

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    token: "none"
  });

  // Save User to database
  try {
    const savedUser = await user.save();
    res.send(`User ${savedUser.username} created!!`);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Login Route
router.post("/login", async (req, res) => {
  // Validate User input/make sure it makes sense
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if user exists
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("Username doesnt exist");

  //Check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("invalid password");

  //   Create  and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  // res.header("auth-token", token).json({"login": true, "token": token});

  // Assign token to user
  const save = await user.updateOne({ token: token });

  res.json({
    "token": token,
    "islogged": true
  });
});

// Logout route
router.post('/logout', async (req,res)=>{
  res.send('test')
})
module.exports = router;
