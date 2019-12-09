const jwt = require("jsonwebtoken");

// This can be added to any route will check if user has a token
// assigned when logged in

module.exports = function(req, res, next) {
  // Check if it has the token
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    res.locals.user = req.user;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
