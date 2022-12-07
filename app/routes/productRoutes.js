module.exports = function (app) {
    var products = require('../controllers/productsController.js');
    // test server
    app.get("/", (req, res) => {
        res.status(200).send("Test")
    })
    // Create a new product
    app.post('/api/products', products.create);
    app.get('/api/products/:id',products.findOne)
}