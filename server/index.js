const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const AuthLibrary = require('./libraries/auth');
require('dotenv/config');

const app = express();
const port = 8080;


app.use((req, res, next) => {
console.log(req.method + ' ' + req.path + ' ' + '-' + ' ' + req.ip);
next();
})

app.use(bodyParser.json());        // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

//ROUTES
app.get('/', (req, res) => {
    res.send('we are on home');
});


//import routes
const authRoute = require('./routes/auth');
const schoolRoute = require('./routes/school');

//use routes
app.use('/auth',authRoute);
app.use('/school',AuthLibrary.verify_token,schoolRoute);
// app.use('/school',schoolRoute);

//DATABASE
mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
    () => {
        console.log('connected to DB');
    }
);
mongoose.connection.on('error', (err) => {console.log(err)});


// app.listen(port);
var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 });