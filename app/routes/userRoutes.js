module.exports = (app) => {
  var user = require("../controllers/userController.js");
  const middlewares = require("../middlewares/index.js");

  app.delete(
    "/api/users/:id",
    user.ownerId,
    middlewares.authJwt.verifyToken,
    middlewares.authJwt.isAdminOrOwner,
    user.deleteOne
  );
  app.get(
    "/api/users",
    middlewares.authJwt.verifyToken,
    middlewares.authJwt.isAdmin,
    user.findAll
  );
  app.get("/api/users/:id", user.findOne);
  app.patch(
    "/api/users/:id",
    user.ownerId,
    middlewares.authJwt.verifyToken,
    middlewares.authJwt.isAdminOrOwner,
    user.updateOne
  );
  app.patch(
    "/api/users/:id/setPerms",
    middlewares.authJwt.verifyToken,
    middlewares.authJwt.isAdmin,
    user.setPerms
  );
};
