const jwt = require("jsonwebtoken");
const config = require("../config/auth.js");
const db = require("../models");

verifyAdmin = (req, res) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  return jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Invalid token!",
      });
    }
    return isAdmin(decoded.id);
  });
};

verifyToken = (req, res) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  return jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Invalid token!",
      });
    }
    return db.users.findByPk(decoded.id).then((user) => {
      if (user) return decoded.id;
      return false;
    });
  });
};

isAdmin = (uid) => {
  return db.users.findByPk(uid).then((user) => {
    if (user) return user.perms;
    return false;
  });
};

const authJwt = {
  verifyToken: verifyToken,
  verifyAdmin: verifyAdmin,
};

module.exports = authJwt;
