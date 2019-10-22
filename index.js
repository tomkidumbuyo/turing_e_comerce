const port = 7200;
const express = require('express');
const expressApp = express();

const cors = require('cors');
expressApp.use(cors({
  origin:['http://localhost:4200','http://127.0.01:4200'],
  credentials:true
}));

const db = require("./models");


const bodyParser = require('body-parser');
expressApp.use(bodyParser.urlencoded({ extended: true }));


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
expressApp.use('/customers', customersRoutes);

//authentication routes
expressApp.use('/categories', categoriesRoutes);
expressApp.use('/departments', departmentsRoutes);
expressApp.use('/attributes', attributesRoutes);
expressApp.use('/products', productsRoutes);
expressApp.use('/customer', customerRoutes);
expressApp.use('/orders', ordersRoutes);
expressApp.use('/shoppingcart', shoppingcartRoutes);
expressApp.use('/tax', taxRoutes);
expressApp.use('/shipping', shippingRoutes);
expressApp.use('/stripe', stripeRoutes);

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