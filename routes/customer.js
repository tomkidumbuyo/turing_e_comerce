const express = require('express');
const router = express.Router();
const models = require('../models');
const auth = require('../libraries/auth');

router.use('/', auth.verify_token);
router.put('/',(req, res) => {

    updt = {};

    if(req.body.name){
        updt.name = req.body.name;
    }
    if(req.body.city){
        updt.city = req.body.city;
    }
    if(req.body.region){
        updt.region = req.body.region;
    }
    if(req.body.country){
        updt.country = req.body.country;
    }
    if(req.body.postal_code){
        updt.postal_code = req.body.postal_code;
    }
    if(req.body.shipping_region_id){
        updt.shipping_region_id = req.body.shipping_region_id;
    }
    if(req.body.address_1){
        updt.address_1 = req.body.address_1;
    }
    if(req.body.address_2){
        updt.address_2 = req.body.address_2;
    }
    if(req.body.day_phone){
        updt.day_phone = req.body.day_phone;
    }
    if(req.body.eve_phone){
        updt.eve_phone = req.body.eve_phone;
    }
    if(req.body.mob_phone){
        updt.mob_phone = req.body.mob_phone;
    }
    if(req.body.email){
        updt.email = req.body.email;
    }

    models.customer.update(
        updt, { where: { customer_id: req.customer.customer_id } }
    ).then(count => {
        console.log('Rows updated ' + count);
        models.customer.findAll({
            where: {email: req.customer.email},
            limit: 1
        }).then((customers) => {
            if (customers[0]) {
                res.json(customers[0]);
            } else {
                res.status(500).json({message: "Error user does not exist."});
            }
        });
    });

});

router.get('/',(req, res) => {
    res.json(req.customer);
});

module.exports = router;