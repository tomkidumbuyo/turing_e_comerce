const express = require('express');
const router = express.Router();
const models = require("../models");

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

router.get('/:product_id',(req, res) => {

});

router.get('/inCategory/:category_id',(req, res) => {

})

router.get('/inDepartment/:department_id',(req, res) => {

})

router.post('/:product_id/reviews',(req, res) => {

});





module.exports = router;