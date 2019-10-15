const express = require('express');
const router = express.Router();
const models = require("../models");

router.get('/:product_id',(req, res) => {
    models.product.findAll({
        where : {product_id:req.params.product_id},
        limit: 1
    })
    .then((products) => {
        if(products.length){
            res.json(products[0]);
        }else{
            res.status(500).json({message: "No product with provided id"});
        }
    })
    .catch(err => {
        res.status(500).json({message: "Error executing request. "+err});
    });
});

router.get('/:page?/:limit?/:description_length?',(req, res) => {
    q = {}
    if (req.params.page && req.params.limit) {
        q.offset = parseInt(req.params.page) * parseInt(req.params.limit);
        q.limit = parseInt(req.params.limit);
    }
    q.subQuery = false
    models.product.findAll(q)
    .then((products) => {
        res.json({count: products.length, rows: products});
    })
    .catch(err => {
        res.status(500).json({message: "Error executing request. "+err});
    });
});

router.get('/search',(req, res) => {

});

router.get('/inCategory/:category_id',(req, res) => {

})

router.get('/inDepartment/:department_id',(req, res) => {

})

router.post('/:product_id/reviews',(req, res) => {

});





module.exports = router;