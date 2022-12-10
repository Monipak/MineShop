const express = require("express");
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8080",
};
const app = express();

app.use(cors(corsOptions)); // or app.use(cors()); if you don’t have blocked any request
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
require("./app/routes/productRoutes")(app);
require("./app/routes/reviewsRoutes")(app);
require("./app/routes/authRoutes")(app);
require("./app/routes/userRoutes")(app);
app.listen(5000, () => {
  console.log("Server has started!");
});
var db = require("./app/models/index");

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });