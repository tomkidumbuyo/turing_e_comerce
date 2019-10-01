'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING(50),
    email: DataTypes.STRING(100),
    password: DataTypes.STRING(50),
    creditcard: DataTypes.TEXT,
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
  }, {});
  customer.associate = function(models) {
    customer.belongsTo(models.shipping_region, {foreignKey: 'shipping_region_id', as: 'shipping_region'});
  };
  return customer;
};