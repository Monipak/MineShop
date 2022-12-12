module.exports = {
    HOST: "finalserver.c0pj4jozbnof.eu-west-2.rds.amazonaws.com",
    PORT: 3306,
    USER: "root", 
    PASSWORD: "toorroot",
    DB: "finalserver",
    dialect: "mariadb",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
/*
module.exports = {
    HOST: "localhost",
    PORT: 3306,
    USER: "root", 
    PASSWORD: "toor",
    DB: "finalserver",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    } 
} */