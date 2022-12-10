module.exports = (app) => {
  var products = require("../controllers/productsController.js");
  // test server
  app.get("/api/products", products.findAll);
  app.post("/api/products", products.create);
  app.get("/api/products/:id", products.findOne);
  app.delete("/api/products/:id", products.deleteOne);
  app.patch("/api/products/:id", products.updateOne);
};
