const express = require('express');
const router = express.Router();
const uuidv1 = require('uuid/v1');
const models = require('../models')


router.get('/generateUniqueId',(req, res) => {
    res.json({cart_id: uuidv1()})
});

router.post('/add',(req, res) => {

    cart_id = req.body.cart_id
    product_id = req.body.product_id
    attributes = req.body.attributes
    quantity = req.body.quantity

    models.shopping_cart.findAll({ 
        where:{cart_id: cart_id, product_id: product_id},
    })
    .then((items) => {
        if(items.length > 0){
            //TODO add code to update value
            items[0].update({
                cart_id: cart_id,
                product_id: product_id,
                attributes: attributes,
                quantity: quantity,
            })
        }else{
            models.shopping_cart.create({
                cart_id: cart_id,
                product_id: product_id,
                attributes: attributes,
                quantity: quantity,
            })
        }
    })
    .catch(err => {
        res.status(500).json({message: "error executing request. "+err});
    });
});

router.get('/:cart_id',(req, res) => {
    models.shopping_cart.findAll({
        where:{cart_id: req.params.cart_id},
    })
    .then((items) => {
        res.json(items);
    })
    .catch(err => {
        res.status(500).json({message: "error executing request. "+err});
    });
});

router.put('update/:item_id',(req, res) => {

    cart_id = req.body.cart_id
    product_id = req.body.product_id
    attributes = req.body.attributes
    quantity = req.body.quantity

    models.shopping_cart.findAll({ 
        where:{item_id: req.params.item_id},
    })
    .then((items) => {
        if(items.length > 0){
            //TODO add code to update value
            items[0].update({
                cart_id: cart_id,
                product_id: product_id,
                attributes: attributes,
                quantity: quantity,
            })
        }else{
            res.status(500).json({message: "Item does not exist. "});
        }   
    })
});

router.delete('empty/:cart_id',(req, res) => {
    models.shopping_cart.destroy({
        where:{cart_id: req.params.cart_id},
    })
    res.json([])
});

router.get('moveToCart/:item_id',(req, res) => {

});

router.get('totalAmount/:cart_id',(req, res) => {
    models.shopping_cart.findAll({
        where:{cart_id: req.params.cart_id},
        include: [{model: models.product, as: "product"}]
    })
    .then((items) => {
        total = 0
        items.forEach( item => {
            total += (item.quantity * item.product.price)
        });
        res.json({total_amount : total});
    })
    .catch(err => {
        res.status(500).json({message: "error executing request. "+err});
    });
});

router.get('saveForLater/:item_id',(req, res) => {

});

router.get('getSaved/:cart_id',(req, res) => {

});

router.delete('removeProduct/:item_id',(req, res) => {

});

module.exports = router;