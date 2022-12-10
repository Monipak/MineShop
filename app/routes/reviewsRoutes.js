module.exports = (app) => {
    const reviews = require('../controllers/reviewsController.js');
    app.post('/api/products/:productId/reviews',reviews.create);
    app.get('/api/products/:productId/reviews',reviews.findAll);
    app.delete('/api/reviews/:id',reviews.deleteOne);
    app.patch('/api/reviews/:id',reviews.updateOne);
    app.get('/api/reviews/:id',reviews.findOne)
}