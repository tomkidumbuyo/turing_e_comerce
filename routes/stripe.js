const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const express = require('express');
const router = express.Router();

router.post('/charge', (req, res ) => {

    const token = req.body.stripeToken;

    console.log("\n\n\n\n\n\ token",token);
    
    stripe.charges.create(
    {
        amount: parseInt(req.body.amount),
        currency: 'usd',
        description: req.body.description,
        source: token.id,
    },
    function(err, charge) {
        if (err) {
            res.status(500).json({message: "Error creating charge." + err});
        }
        res.json(charge);
    });

});

router.post('/stripe/webhooks', (req, res ) => {

});

module.exports = router;