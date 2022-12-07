const dbConfig = require("../config/db.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    
    host: dbConfig.HOST,
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
module.exports = db;