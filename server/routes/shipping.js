const express = require('express');
const router = express.Router();
var models = require('../models');
Sequelize = require('sequelize');

router.get('/regions',(req, res) => {
    const Op = Sequelize.Op
    models.shipping_region.findAll({
        where:{[Op.ne]: 1}
    })
    .then((shipping_regions) => {
        res.json(shipping_regions);
    })
    .catch(err => {
        res.status(500).json({message: "erro executing request"+err});
    });
});

router.get('/regions/:shipping_region_id',(req, res) => {
    models.shipping_region.findAll({
        where:{attribute_id: req.params.attribute_id},
        include: [{model: models.shipping, as: "category"}],
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

module.exports = router;