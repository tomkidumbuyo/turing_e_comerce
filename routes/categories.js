const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/',(req, res) => {
    models.category.findAll()
    .then((categories) => {
        res.json({count: categories.length, rows: categories});
    })
    .catch(err => {
        res.status(500).json({message: "Error executing request. "+err});
    });
});

router.get('inProduct/:product_id',(req, res) => {
    models.product_category.findAll({
        where:{product_id: req.params.product_id},
        include: [{model: models.category, as: "category"}]
    })
    .then((product_categories) => {
        const categories = product_categories.map( element => element.category );
        res.json(categories);
    })
    .catch(err => {
        res.status(500).json({message: "Error executing request. "+err});
    });
});

router.get('inDepartment/:department_id',(req, res) => {
    models.category.findAll({
        where: {department_id: req.params.department_id},
        limit: 1
    })
    .then((categories) => {
        if(categories.length){
            res.json(categories[0]);
        }else{
            res.status(500).json({message: "Error: No department found. "}); 
        } 
    })
    .catch(err => {
        res.status(500).json({message: "Error executing request. "+err});
    });
});

router.get('/:category_id',(req, res) => {
    models.category.findAll({
        where: {category_id: req.params.category_id},
        limit: 1
    })
    .then((categories) => {
        if(categories.length){
            res.json(categories[0]);
        }else{
            res.status(500).json({message: "Error: No department found. "}); 
        } 
    })
    .catch(err => {
        res.status(500).json({message: "Error executing request. "+err});
    });
});

module.exports = router;