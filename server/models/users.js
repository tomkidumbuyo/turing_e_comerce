const mongoose = require('mongoose')
const Bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({

    //Authentication data
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    password: String,
    //personal information
    first_name: {type:String,required:false},
    last_name: {type:String,required:false},
    image: {type:String,required:false},
    country: {type:String,required:false},
    //account verification code
    verified: {
        status: {type:Boolean,required:false},
        date:{type:Date,required:false}
    },
    email_verified: {
        token: {type:String,required:false},
        expire_date: {type:Date,required:false},
        status: {type:Boolean,required:false},
        date:{type:Date,required:false}
    },
    phone_verified: {
        token: {type:String,required:false},
        expire_date: {type:Date,required:false},
        status: {type:Boolean,required:false},
        date:{type:Date,required:false}
    },
    email_verification_code: {type:String,required:false},
    phone_verification_code: {type:String,required:false},
    //Dates
    date_of_birth: {type:Date,required:false},
    date_of_registration: {type: Date, default: Date.now},

}, { bufferCommands: false });

UserSchema.pre("save", function(next) {

    console.log(this);
    
    if(!this.isModified("password")) {
        return next();
    }
    this.password = Bcrypt.hashSync(this.password, 10);
    this.verified.status = false;

    next();
});

UserSchema.methods.comparePassword = function(plaintext, callback) {
    return callback(null, Bcrypt.compareSync(plaintext, this.password));
};


module.exports = mongoose.model('Users', UserSchema);