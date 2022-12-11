const jwt = require("jsonwebtoken");
const config = require("../config/auth.js");
const db = require("../models");
const User = db.users;
verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.sendStatus(401);
    }
    req.userId = decoded.id;
    next();
  });
};
isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    if (user.perms){
      next();
      return;
    }
    res.sendStatus(401);
    return
  });
};
isUser = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    if (user){
      next();
      return;
    }
    res.sendStatus(401);
    return
  });
}
isAdminOrOwner = (req,res,next) => {
  if (req.ownerId == req.userId){
    next()
    return;
  }
  User.findByPk(req.userId).then((user) => {
    if (user.perms){
      next();
      return;
    }
    res.sendStatus(401);
    return
  }); 
}
const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isUser: isUser,
  isAdminOrOwner: isAdminOrOwner
};
module.exports = authJwt;
/*
verifyAdmin = (req,res) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Invalid token!",
      });
    }
    return isAdmin(decoded.id)
  });
};

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Invalid token!",
      });
    }
    req.userId = decoded.id;
    next(req,res);
  });
};


isAdmin = (uid) => {
  console.log
  return db.users.findByPk(uid).then(user => user.perms);
};

const authJwt = {
  verifyToken: verifyToken,
  verifyAdmin: verifyAdmin,
};

module.exports = authJwt; */
