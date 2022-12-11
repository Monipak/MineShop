const db = require("../models");
const Products = db.products;

exports.findAll = (req, res) => {
  Products.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};

exports.create = (req, res) => {
  const product = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    quantity: req.body.quantity,
  };

  Products.create(product)
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

  Products.findByPk(req.params.id)
    .then((data) => {
      if (data) {
        res.status(200).send(data);
        return;
      }
      res
        .status(404)
        .send({ message: "COULDN'T FIND PRODUCT WITH ID " + req.params.id });
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

  Products.destroy({ where: { id: req.params.id } })
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

exports.updateOne = (req, res) => {
  if (!Number.isInteger(parseInt(req.params.id))) {
    res.status(400).send({
      message: "invalid ID!",
    });
    return;
  }
  Products.update(
    {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
      quantity: req.body.quantity,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.sendStatus(200);
};

exports.updateOneQuantity = (req, res) => {
  //very hazardous (race)
    if (!Number.isInteger(parseInt(req.params.id))) {
      res.status(400).send({
        message: "invalid ID!",
      });
      return;
    }
    Products.update(
      {
        quantity: req.body.quantity,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.sendStatus(200);
    return;
};

exports.fromjson = () => {
  data = require("./productsInit.json");
  data.articles.forEach((product) => {
    Products.create(product);
  });
};
