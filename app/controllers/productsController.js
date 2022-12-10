const db = require("../models");
const Op = db.Sequelize.Op;
const Products = db.products;
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "product shall have a name !"
        })
        return
    } else if (!req.body.description) {
        res.status(400).send({
            message: "product shall have a description !"
        })
        return
    } else if (!req.body.price) {
        res.status(400).send({
            message: "product shall have a price !"
        })
        return
    } else if (!req.body.image) {
        res.status(400).send({
            message: "product shall have a image url !"
        })
        return
    } else if (!req.body.quantity){
        res.status(400).send({
            message: "product shall have a quantity !"
        })
        return
    }
    const product = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        quantity: req.body.quantity
    }

    Products.create(product)
        .then(data => {
            res.status(200).send(data)

        })
        .catch(error => {
            res.status(500).send({
                message: error.message
            })
            return
        })

}

exports.findOne = (req, res) => {
    if (!Number.isInteger(parseInt(req.params.id))) {
        res.status(400).send({
            message: "invalid ID!"
        })
        return;
    }


    Products.findByPk(req.params.id)
        .then(data => {
            if (data) {
                res.status(200).send(data)
                return
            }
            res.status(404).send({ message: "COULDN'T FIND PRODUCT WITH ID " + req.params.id })
            return
        })
        .catch(error => {
            res.status(500).send({
                message: error.message
            })
            return
        })
}
exports.findAll = (req, res) => {
    Products.findAll()
    .then(data => {
        res.status(200).send(data)
    })
    .catch(error => {
        res.status(500).send({
            message: error.message
        })
    })
}

exports.deleteOne = (req, res) => {
    if (!Number.isInteger(parseInt(req.params.id))) {
        res.status(400).send({
            message: "invalid ID!"
        })
        return;
    }
    db.reviews.destroy({where: {productId: req.params.id}})

    Products.destroy({ where: {id: req.params.id }})
        .then(() => {
            res.sendStatus(200)
        })
        .catch(error => {
            res.status(500).send({
                message: error.message
            })
            return
        })
    
}

exports.updateOne = (req, res) => {
    Products.update({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    },
    {
        where: {
            id : req.params.id
        }
    })
    res.sendStatus(200);
}