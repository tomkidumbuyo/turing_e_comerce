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
        where:{product_id: req.params.product_id}
    })
    .then((product_attributes) => { 
        const attrbts = []
        product_attributes.forEach((element,index) => {
            
            console.log(element);
            models.attribute_value.findAll({
                where:{attribute_value_id: element.attribute_value_id},
            })
            .then((attributes) => {
                if(attributes.length){
                    attrbts.push(attributes[0]);
                    if (index == (product_attributes.length-1)){
                        res.json(attrbts);
                    }
                }else{
                    return false;
                }
            })
            .catch(err => {
                return false;
            });
        });
        
    })
    .catch(err => {
        res.status(500).json({message: "Error executing request. "+err});
    });
});

module.exports = router;