const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const models = require('../models');
require('dotenv/config');

function verify_token (req,res,next){
  
  try {
    if(req.headers.authorization !== undefined){

      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const customer_id = decodedToken.user.customer_id;


      models.customer.findAll({
        where: {customer_id: customer_id },
        limit: 1
      })
      .then((customers) => {
        if (customers.length) {
          console.log("\n authorization successfully for " + customers[0].dataValues.email);
          req.customer = customers[0].dataValues;
          next();
        } else {
          res.status(401).json({
            error: new Error('authorization failed')
          });
        }
      });
      
    }else{
      throw 'Please add an authorization token on your header.';
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({
      error: new Error('authorization failed')
    });
  }
}

function is_loggeg_in(req,res,next){

}

function send_verification_email (username){

    token = crypto.randomBytes(16);
    UserModel.findOne({email:username,username:username}, (err,users) => {
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
        text: 'To verify your e-mail address, click the link below:<\br><a href="${hostname}auth/email_verification/${hostname}"></a>'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
    });
};

module.exports = {
    verify_token: verify_token,
    send_verification_email: send_verification_email
};