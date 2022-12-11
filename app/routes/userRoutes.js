module.exports = (app) => {
  var user = require("../controllers/userController.js");
  const middlewares = require("../middlewares/index.js");

  app.delete(
    "/api/user/:id",
    user.ownerId,
    middlewares.authJwt.verifyToken,
    middlewares.authJwt.isAdminOrOwner,
    user.deleteOne
  );
  app.get(
    "/api/user",
    middlewares.authJwt.verifyToken,
    middlewares.authJwt.isAdmin,
    user.findAll
  );
  app.get("/api/user/:id", user.findAll);
  app.patch(
    "/api/user/:id",
    user.ownerId,
    middlewares.authJwt.verifyToken,
    middlewares.authJwt.isAdminOrOwner,
    user.updateOne
  );
  app.patch(
    "/api/user/:id/setPerms",
    middlewares.authJwt.verifyToken,
    middlewares.authJwt.isAdmin,
    user.setPerms
  );
};
