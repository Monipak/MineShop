const db = require("../models");
const Op = db.Sequelize.Op;
const Products = db.products

exports.create = (req,res) => {
    if(!req.body.name){
        res.status(400).send({
            message:"product shall have a name !"
        })
    } else if(!req.body.description){
        res.status(400).send({
            message:"product shall have a description !"
        })
    } else if(!req.body.price){
        res.status(400).send({
            message:"product shall have a price !"
        })
    } else if(!req.body.image){
        res.status(400).send({
            message:"product shall have a image url !"
        })
    }
    const product = {
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        image : req.body.image
    }

    Products.create(product)
    .then(data => {
        res.status(200).send(data)
    })
    .catch(error => {
        res.status(500).send({
            message: error.message
        })
    })

}

exports.findOne = (req,res) => {
    var id = parseInt(req.params.id)
    if (!Number.isInteger(id)){
        console.log(id, typeof id)
        res.status(400).send({
            message:"invalid ID!"
        })
        return;
    }

    
    Products.findByPk(id)
    .then(data => {
        if (data){
            res.status(200).send(data)
            return
        }
        res.status(404).send({message : "COULDN'T FIND PRODUCT WITH ID "+ id})
        return
    })
    .catch(error => {
        res.status(500).send({
            message: error.message
        })
        return
    })
}