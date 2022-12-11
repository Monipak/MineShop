module.exports = (app) => {
  const reviews = require("../controllers/reviewsController.js");
  const middlewares = require("../middlewares/index.js");

  app.post(
    "/api/products/:productId/reviews",
    middlewares.authJwt.verifyToken,
    middlewares.authJwt.isUser,
    reviews.create
  );
  app.get("/api/products/:productId/reviews", reviews.findAll);
  app.delete(
    "/api/reviews/:id",
    reviews.ownerId,
    middlewares.authJwt.verifyToken,
    middlewares.authJwt.isAdminOrOwner,
    reviews.deleteOne
  );
  app.patch(
    "/api/reviews/:id",
    reviews.ownerId,
    middlewares.authJwt.verifyToken,
    middlewares.authJwt.isAdminOrOwner,
    reviews.updateOne
  );
  app.get("/api/reviews/:id", reviews.findOne);
};
