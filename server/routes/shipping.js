const express = require('express');
const router = express.Router();
var models = require('../models');
Sequelize = require('sequelize');

router.get('/regions',(req, res) => {
    models.shipping_region.findAll()
    .then((shipping_regions) => {
        shipping_regions.shift();
        res.json(shipping_regions);
    })
    .catch(err => {
        res.status(500).json({message: "error executing request. "+err});
    });
});

router.get('/regions/:shipping_region_id',(req, res) => {
    models.shipping.findAll({
        where:{shipping_region_id: req.params.shipping_region_id},
        limit:1
    })
    .then((shipping) => {
        if(shipping.length){
            res.json(shipping);
        }else{
            res.status(500).json({message: "attribute not found"});
        }
    })
    .catch(err => {
        res.status(500).json({message: "error executing request. "+err});
    });
});

module.exports = router;