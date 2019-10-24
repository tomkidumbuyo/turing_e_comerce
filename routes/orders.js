const express = require('express');
const router = express.Router();
const models = require('../models');
const auth = require('../libraries/auth');

router.use('/', auth.verify_token);
router.post('/',(req, res) => {

    cart_id = req.body.cart_id;
    shipping_id = req.body.shipping_id;
    tax_id = req.body.tax_id;

    total = 0;
    models.shopping_cart.findAll({
        where: {cart_id: cart_id},
        include: [{model: models.product, as: "product"}]
    }).then((items) => {
        items.forEach(item => {
            total += item.quantity * item.product.price;
        });
    });

    order = models.orders.create({
        total_amount: total,
        status: 1,
        customer_id: req.customer.customer_id,
        shipping_id: shipping_id,
        tax_id: tax_id
    });

    res.json({orderId: 1});

});

router.get('/:order_id',(req, res) => {

});

router.get('/inCustomer',(req, res) => {

});

router.get('shortDetail/:order_id',(req, res) => {

});

module.exports = router;