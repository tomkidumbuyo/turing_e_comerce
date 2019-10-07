const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/',(req, res) => {
    models.attribute.findAll()
    .then((attributes) => {
        res.json(attributes);
    }).catch(err => {
        res.status(500).json({message: "erro executing request"+err});
    });;
});

router.get('/:attribute_id',(req, res) => {
    models.attribute.findAll({
        where:{attribute_id: req.params.attribute_id},
        limit:1
    })
    .then((attributes) => {
        if(attributes.length){
            res.json(attributes[0]);
        }else{
            res.status(500).json({message: "attribute not found"});
        }
    })
    .catch(err => {
        res.status(500).json({message: "erro executing request"+err});
    });
});

router.get('/values/:attribute_id',(req, res) => {
    models.attribute_value.findAll({
        where:{attribute_id : req.params.attribute_id},
    })
    .then((attribute_values) => {
        res.json(attribute_values);
    })
    .catch(err => {
        res.status(500).json({message: "Error executing request. "+err});
    });
});

router.get('/inProduct/:product_id',(req, res) => {

    models.product_attribute.findAll({
        where:{product_id: req.params.product_id},
        include: [{model: models.attribute_value, as: "attribute_value"}]
    })
    .then((product_attributes) => {

        const attributes = product_attributes.map( element => element.attribute_value );
        res.json(attributes);
    })
    .catch(err => {
        res.status(500).json({message: "Error executing request. "+err});
    });
});

module.exports = router;