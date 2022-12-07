module.exports = {
    HOST: "localhost",
    PORT: 3306,
    USER: "root", /// for example for me it is rogus
    PASSWORD: "toor",
    DB: "finalserver",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};