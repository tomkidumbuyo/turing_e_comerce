const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const express = require('express');
const router = express.Router();

router.post('/stripe/charge', (req, res ) => {

    const token = request.body.stripeToken; // Using Express

    (async () => {
    const charge = await stripe.charges.create({
        amount: 999,
        currency: 'usd',
        description: 'Example charge',
        source: token,
    });
    })();
});

router.post('/stripe/webhooks', (req, res ) => {

});

module.exports = router;