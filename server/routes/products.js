const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    models.product.findAll()
    .then((products) => {
        res.json({count: products.length, rows: products});
    })
    .catch(err => {
        res.status(500).json({message: "Error executing request. "+err});
    });
});

router.get('/search',(req, res) => {

});

router.get('/:product_id/:type',(req, res) => {

});

router.get('/inCategory/:category_id',(req, res) => {

})

router.get('/inDepartment/:department_id',(req, res) => {

})

router.post('/:product_id/reviews',(req, res) => {

});





module.exports = router;