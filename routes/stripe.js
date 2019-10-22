const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const express = require('express');
const router = express.Router();

router.post('/charge', (req, res ) => {

    const token = req.body.stripeToken; // Using Express

    (async () => {
    res.json( await stripe.charges.create({
        amount: req.body.amount,
        currency: 'usd',
        description: req.body.description,
        source: token,
    }));

    })();
});

router.post('/stripe/webhooks', (req, res ) => {

});

module.exports = router;