const express = require('express');
const router = express.Router();
const UserModel = require("../models/users");
const AccessTokenModel = require("../models/access_tokens");
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv/config');

function verify_token (req,res){
  try {
    if(req.headers.authorization !== undefined){

      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decodedToken.userId;

      models.customer.findAll({
        where: {customer_id: userId },
        limit: 1
      })
      .then((customers) => {

        res.user = customers[0];
        console.log(res.user);
        next();

      });
    }else{
      throw 'Please add an authorization token on your header.';
    }
  } catch (error) {
    console.log(error)
    res.status(401).json({
      error: new Error('Invalid request!')
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