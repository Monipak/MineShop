module.exports = (app) => {
  var products = require("../controllers/productsController.js");
  const middlewares = require("../middlewares/index.js");
  // test server
  app.get("/api/products", products.findAll);
  app.post(
    "/api/products",
    middlewares.authJwt.verifyToken,
    middlewares.authJwt.isAdmin,
    products.create
  );
  app.get("/api/products/:id", products.findOne);
  app.delete(
    "/api/products/:id",
    middlewares.authJwt.verifyToken,
    middlewares.authJwt.isAdmin,
    products.deleteOne
  );
  app.patch(
    "/api/products/:id",
    middlewares.authJwt.verifyToken,
    middlewares.authJwt.isAdmin,
    products.updateOne
  );
  app.patch(
    "/api/products/:id/quantity",
    middlewares.authJwt.verifyToken,
    middlewares.authJwt.isUser,
    products.updateOneQuantity
  );
};
