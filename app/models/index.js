const dbConfig = require("../config/db.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

sequelize.authenticate()
.catch(error => console.log("Authentification : " + error))

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.products = require("./productsModel.js")(sequelize, Sequelize);
db.users = require("./usersModel.js")(sequelize, Sequelize);
db.reviews = require("./reviewsModel.js")(sequelize, Sequelize);

db.products.hasMany(db.reviews,{
    foreignKey:"productId"
});

db.roles = ["user","admin"]
module.exports = db;