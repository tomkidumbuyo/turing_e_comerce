const mongoose = require('mongoose');

const SchoolSchema = mongoose.Schema({
    name: {type: String, unique: true},
    online:Boolean,
    location: {
        country: {type:String},
        state: {type:String}
    },
    contacts:{
        adress: {type:String},
        phonenumber: {type:String},
        email: {type:String}
    },
    stages: []
});

module.exports = mongoose.model('Schools', SchoolSchema);