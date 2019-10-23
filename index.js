const port = process.env.PORT || 8080;
const express = require('express');
const expressApp = express();
require('dotenv').config();

const cors = require('cors');
expressApp.use(cors({
  origin:['http://localhost:4200','http://127.0.01:4200'],
  credentials:true
}));

const db = require("./models");


const bodyParser = require('body-parser');
expressApp.use(bodyParser.urlencoded({ extended: true }));

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
expressApp.use(express.static(distDir));

//import route files
customersRoutes    = require("./routes/customers");
categoriesRoutes   = require("./routes/categories");
departmentsRoutes  = require("./routes/departments");
attributesRoutes   = require("./routes/attributes");
productsRoutes     = require("./routes/products");
customerRoutes     = require("./routes/customer");
ordersRoutes       = require("./routes/orders");
shoppingcartRoutes = require("./routes/shoppingcart");
taxRoutes          = require("./routes/tax");
shippingRoutes     = require("./routes/shipping");
stripeRoutes       = require("./routes/stripe");

//authentication routes
expressApp.use('/api/customers', customersRoutes);

//authentication routes
expressApp.use('/api/categories', categoriesRoutes);
expressApp.use('/api/departments', departmentsRoutes);
expressApp.use('/api/attributes', attributesRoutes);
expressApp.use('/api/products', productsRoutes);
expressApp.use('/api/customer', customerRoutes);
expressApp.use('/api/orders', ordersRoutes);
expressApp.use('/api/shoppingcart', shoppingcartRoutes);
expressApp.use('/api/tax', taxRoutes);
expressApp.use('/api/shipping', shippingRoutes);
expressApp.use('/api/stripe', stripeRoutes);

//redirects to angular
expressApp.use(function(req, res) {
  res.sendfile(__dirname + '/index.html'); // will execute angular code
});

//init the server
db.sequelize.sync().then(() => {
  console.log('Database connection successfull');
  expressApp.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
}).catch(err => {
  console.error('Unable to sync to the database:\n\n', err);
});

module.exports = expressApp;