module.exports = (app) => {
    var auth = require("../controllers/authController.js")
    app.post("/api/users/register",auth.tryToCreateUser)
    app.post("/api/users/login",auth.login)
}