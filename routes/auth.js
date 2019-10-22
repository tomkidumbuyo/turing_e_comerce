const express = require('express');
const router = express.Router();
const UserModel = require("../models/users");
const AccessTokenModel = require("../models/access_tokens");
const jwt = require('jsonwebtoken');
require('dotenv/config');

const nodemailer = require('nodemailer');
var http = require('http');
var url = require('url') ;


//USER REGISTRATIION
// register
/**
 *
 * @username the username for the user
 * @password the password for the user
 * @email the email for the user
 *
 */
router.post('/register',(req, res) => {

    var hostname = req.headers.host; // hostname = 'localhost:8080'
    var pathname = url.parse(req.url).pathname; // pathname = '/MyApp'

    username = req.body.username;
    password = req.body.password;
    email = req.body.email;

    UserModel.find({email:email,username:username}, (err,users) => {
        if(err){
            console.log(err)
            return;
        }
        console.log(users)
        if (users.length == 0){

            var date = new Date();
            date.setDate(date.getDate()+2);

            user = new UserModel({
                username: username,
                email: email,
                password: password,
                email_verified: {
                    token: token,
                    expire_date: date,
                    status: false,
                    date: Date.now()
                },
            });
            user.save()
            .then(data => {
                // send verification email
                res.json(data);
            })
            .catch(error => {
                res.status(500).json({message: error});
            });

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
                html: 'To verify your e-mail address, click the link below:<br><a href="' + hostname + 'auth/email_verification/' + username + '/' + hostname + '">Verify your email </a>'
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            
        }else{
            res.status(500).json({message: "user already exists"});
        }
    });
});


// USER LOGIN
//login
router.post('/login',(req, res) => {
    
    username = req.body.username;
    password = req.body.password;

    if(username && password){
        UserModel.findOne({$or: [{username: username},{email: username}]}, (err, user) => {
            if(err){
                res.status(500).json({message: "user already exists"});
                return;
            }

            if(!user){
                res.status(500).json({message: "user not found"});
                return;
            }

            // verify password
            user.comparePassword(password, (err, isMatch) => {
                if(err){
                    res.status(500).json({message: "user already exists"});
                    return;
                }

                if(isMatch){
                    // authentication success
                    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
                    
                    jwt.sign({user: user}, process.env.DB_CONNECTION, (err,token) => {

                        if (err) {
                            res.status(500).json({message: err});
                            return;
                        }

                        accessToken = new AccessTokenModel({
                            access_token: token,
                            user_id: user.username,
                            time: Date.now(),
                            ip_adress: ip,
                        });

                        accessToken.save()
                        .then(data => {
                            res.json(data);
                        })
                        .catch(err => {
                            res.status(500).json({message: err});
                        })
                    })
                }else{
                    res.status(500).json({message: "user already exists"});
                }
            });
        });
    }else{
        res.status(500).json({message: "please post username and password"});
    }

});

//FORGOT PASSWORD ENDPOINT
//receive email adress

//send email verification email

//verify email adress
router.get('/email_verification/:username/:verification_code',(req, res) => {
    var verification_code = req.params.verification_code;
    var username = req.params.username;

    if(verification_code && username){
        UserModel.findOne({username:username}, (err,user) => {
            if(err){
                console.log(err);
                res.status(500).json({message: err });
                return;
            }

            if(user.email_verified.token == verification_code){
                if(user.email_verified.date == Date.now()){
                    res.json({message: "user " + username + " account is activated" });
                }else{
                    res.status(500).json({message: "verification code is expired." });
                }
            } else {
                res.status(500).json({message: "verification code does not match the one sent to the email." });
            }
        });
    }else{
        res.status(500).json({message: "user already exists"});
    }
});

//new password


//SETTINGS

module.exports = router;