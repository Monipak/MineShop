const db = require("../models");
const Reviews = db.reviews;

exports.create = (req, res) => {
    if (!req.body.user) {
        res.status(400).send({
            message: "review shall have a user !"
        })
        return
    } else if (!req.body.message) {
        res.status(400).send({
            message: "review shall have a message !"
        })
        return
    } else if (!req.body.rate) {
        res.status(400).send({
            message: "review shall have a rate !"
        })
        return
    }

    const review = {
        date: req.body.date,
        user: req.body.user,
        message: req.body.message,
        rate: req.body.rate,
        productId: req.params.productId
    }

    Reviews.create(review)
        .then(data => {
            res.status(200).send(data)
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
    if (!Number.isInteger(parseInt(req.params.productId))) {
        res.status(400).send({
            message: "invalid ID!"
        })
        return;
    }

    Reviews.findAll({where: {productId : req.params.productId}})
    .then(data => {
        res.status(200).send(data)
    })
    .catch(error => {
        res.status(500).send({
            message: error.message
        })
    })
}

exports.deleteOne = (req,res) => {
    if (!Number.isInteger(parseInt(req.params.id))) {
        res.status(400).send({
            message: "invalid ID!"
        })
        return;
    }

    Reviews.destroy({where : {id : req.params.id}})
    .then(data => {
        res.sendStatus(200)
    })
    .catch(error => {
        res.status(500).send({
            message: error.message
        })
    })
}

exports.updateOne = (req, res) => {
    Products.update({
        message: req.body.message,
        rate: req.body.rate
    },
    {
        where: {
            id : req.params.id
        }
    })
    res.sendStatus(200);
}

exports.findOne = (req, res) => {
    if (!Number.isInteger(parseInt(req.params.id))) {
        res.status(400).send({
            message: "invalid ID!"
        })
        return;
    }


    Reviews.findByPk(req.params.id)
        .then(data => {
            if (data) {
                res.status(200).send(data)
                return
            }
            res.status(404).send({ message: "COULDN'T FIND review WITH ID " + req.params.id })
            return
        })
        .catch(error => {
            res.status(500).send({
                message: error.message
            })
            return
        })
}
