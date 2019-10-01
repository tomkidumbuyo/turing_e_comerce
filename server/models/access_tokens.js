const mongoose = require('mongoose')

const AccessTokenSchema = mongoose.Schema({
    access_token: {type: String, unique: true},
    user_id: String,
    time: Date,
    ip_adress: String,
})

module.exports = mongoose.model('AccessTokens', AccessTokenSchema);