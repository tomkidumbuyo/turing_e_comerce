const port = 8080;
const express = require('express');
const expressApp = express();

const cors = require('cors');
expressApp.use(cors({
  origin:['http://localhost:4200','http://127.0.01:4200'],
  credentials:true
}));

db = require("./libraries/db");


const bodyParser = require('body-parser');
expressApp.use(bodyParser.urlencoded({ extended: true }));


//import route files
customersRoutes    = require("./routes/customers");
categoriesRoutes   = require("./routes/categories");
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
expressApp.use('/attributes', attributesRoutes);
expressApp.use('/products', productsRoutes);
expressApp.use('/customer', customerRoutes);
expressApp.use('/orders', ordersRoutes);
expressApp.use('/shoppingcart', shoppingcartRoutes);
expressApp.use('/tax', taxRoutes);
expressApp.use('/shipping', shippingRoutes);
expressApp.use('/stripe', stripeRoutes);

//init the server
expressApp.listen(port, () => {
    console.log(`listening on port ${port}`);
});