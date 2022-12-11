const db = require("../models");
const config = require("../config/auth.js");
const Users = db.users;
var middlewares = require("../middlewares/index.js");
var jwt = require("jsonwebtoken")
var bcrypt = require("bcryptjs");

exports.createRoot = () => {
  Users.create({
    username: "root",
    email: "not@an.email",
    password: bcrypt.hashSync("toor", 8),
    perms:true
  })
}

exports.tryToCreateUser = (req, res) => {
  if (!req.body.username) {
    res.status(400).send({ message: "No username given" });
    return;
  } else if (!req.body.email) {
    res.status(400).send({ message: "No email given" });
    return;
  } else if (!req.body.password) {
    res.status(400).send({ message: "No password given" });
    return;
  }

  middlewares.verifySignUp.checkDuplicateUsernameOrEmail(req, res, createUser); // bad usage of middleware, but used only once and does a db query on invalid data 
};

function createUser(req, res) {
  Users.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then(() => {
      res.status(200).send({
        message: "Welcome",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
}
exports.login = (req, res) => {
  Users.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }
    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });
  
    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      perms: user.perms,
      accessToken: token,
    });
  });

};
