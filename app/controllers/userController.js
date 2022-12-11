const db = require("../models");
const Users = db.users;

exports.ownerId = (req, res, next) => {
  if (!Number.isInteger(parseInt(req.params.id))) {
    res.status(400).send({
      message: "invalid ID!",
    });
    return;
  }

  Users.findByPk(req.params.id)
    .then((data) => {
      if (data) {
        req.ownerId = data.id;
        next();
        return;
      }
      res
        .status(404)
        .send({ message: "COULDN'T FIND USER WITH ID " + req.params.id });
      return;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
      return;
    });
};

exports.deleteOne = (req, res) => {
  if (!Number.isInteger(parseInt(req.params.id))) {
    res.status(400).send({
      message: "invalid ID!",
    });
    return;
  }
  db.reviews.destroy({ where: { productId: req.params.id } });

  Users.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
      return;
    });
};

exports.findAll = (req, res) => {
  Users.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};

exports.findOne = (req, res) => {
  if (!Number.isInteger(parseInt(req.params.id))) {
    res.status(400).send({
      message: "invalid ID!",
    });
    return;
  }

  Users.findByPk(req.params.id)
    .then((data) => {
      if (data) {
        res.status(200).send(data);
        return;
      }
      res
        .status(404)
        .send({ message: "COULDN'T FIND USER WITH ID " + req.params.id });
      return;
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
      return;
    });
};
exports.updateOne = (req, res) => {
  if (!Number.isInteger(parseInt(req.params.id))) {
    res.status(400).send({
      message: "invalid ID!",
    });
    return;
  }
  Users.update(
    {
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.sendStatus(200);
};

exports.setPerms = (req, res) => {
    if (!Number.isInteger(parseInt(req.params.id))) {
        res.status(400).send({
          message: "invalid ID!",
        });
        return;
      }
      Users.update(
        {
          perms: req.body.perms,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.sendStatus(200);
}