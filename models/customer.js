const uuid = require('uuid/v4'); // ES5
const bcrypt = require('bcrypt');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    customer_id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
      // type: DataTypes.UUID,
      // defaultValue: uuid()
    },
    name: DataTypes.STRING(50),
    email: DataTypes.STRING(100),
    password: DataTypes.STRING(255),
    credit_card: DataTypes.TEXT,
    address_1: DataTypes.STRING(100),
    address_2: DataTypes.STRING(100),
    city: DataTypes.STRING(100),
    region: DataTypes.STRING(100),
    postal_code: DataTypes.STRING(100),
    country: DataTypes.STRING(100),
    shipping_region_id: DataTypes.INTEGER,
    day_phone: DataTypes.STRING(100),
    eve_phone: DataTypes.STRING(100),
    mob_phone: DataTypes.STRING(100),
  }, {
    freezeTableName: true,
    timestamps: false,
 
  });

  customer.associate = function(models) {
    customer.belongsTo(models.shipping_region, {foreignKey: 'shipping_region_id', as: 'shipping_region'});
  };

  customer.prototype.comparePassword = function(password, callback) {
    res = bcrypt.compareSync(password, this.password);
    callback(null, res);
  };

  

  customer.beforeCreate((customer, options ) => {
    return new Promise ((resolve, reject ) => {

      salt = bcrypt.genSaltSync(10);
      customer.password = bcrypt.hashSync(customer.password, salt)
      return resolve(customer, options);
      
    });
  });


  return customer;
};