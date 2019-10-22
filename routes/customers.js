const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const models = require("../models");
require('dotenv').config();
const jwt = require('jsonwebtoken');


// Registration
router.post('/',(req, res) => {

    hostname = req.headers.host; // hostname = 'localhost:8080'
    password = req.body.password;
    email = req.body.email;
    name = req.body.name;
    

    models.customer.findAll({
        where: {email:email,}
    })
    .then((result) => {
        
        console.log("\n\n\n\n\n\n result \n", result);
        if (result.length == 0){
                var date = new Date();
                date.setDate(date.getDate()+2);
                models.customer.create({
                    email: email,
                    password: password,
                    name: name,
                })
                .then(data => {

                    // send verification email
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                        user: 'kidumbuyoschool@gmail.com',
                        pass: '1123581321aA.'
                        }
                    });
                    var mailOptions = {
                        from: 'kidumbuyoschool@gmail.com',
                        to: email,
                        subject: 'Confirmation code for kidumbuyo school',
                        html: 'To verify your e-mail address, click the link below:<br><a href="' + hostname + 'auth/email_verification/' + email + '/' + hostname + '">Verify your email </a>'
                    };
                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                        console.log(error);
                        } else {
                        console.log('Email sent: ' + info.response);
                        }
                    });

                    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
                    jwt.sign({user: customer}, process.env.JWT_SECRET, (err, token ) => {

                        if (err) {
                            res.status(500).json({message: "Error signing in in jwt " + err});
                            return;
                        }

                        res.json({accessToken:token,customer:{schema:customer}});

                    });
                })
                .catch(error => {
                    res.status(500).json({message: "Error adding user." + error});
                });
            }else{
                res.status(500).json({message: "user already exists"});
            }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message: error});
    });
});

// login
router.post('/login',(req, res) => {

    email = req.body.email;
    password = req.body.password;

    console.log(req.body)

    if(email && password){

        models.customer.findAll({
            where: {email: email},
            limit: 1
        })
        .then((customers) => {

            if(!customers.length){
                res.status(500).json({message: "user not found"});
                return;
            }
            customer = customers[0];

            // verify password
            customer.comparePassword(password, (err, isMatch) => {
                if(err){
                    res.status(500).json({message: "user password did not match"});
                    return;
                }

                console.log(isMatch);

                if(isMatch){
                    // authentication success


                    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
                    jwt.sign({user: customer}, process.env.JWT_SECRET, (err,token) => {

                        if (err) {
                            res.status(500).json({message: "Error signing in in jwt " + err});
                            return;
                        }

                        res.json({accessToken:token,customer:{schema:customer}});

                    });
                }else{
                    res.status(500).json({message: "Passwords don't match"});
                }
            });
        }).catch((err) => {
            res.status(500).json({message: "error getting user: " + err});
        });
    }else{
        res.status(500).json({message: "please post username and password"});
    }
});

//facebook
router.post('/facebook', (req, res ) => {

});

// address
router.put('/address', (req, res ) => {

});

//credit card
router.put('/creditCard', (req, res ) => {

});

module.exports = router;