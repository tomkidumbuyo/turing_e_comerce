'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    orders_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    
    total_amount: DataTypes.DECIMAL(10,2),
    created_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    shipped_on: DataTypes.DATE,
    status: DataTypes.INTEGER,
    comments: DataTypes.STRING(255),
    customer_id: DataTypes.INTEGER,
    auth_code: DataTypes.STRING(50),
    reference: DataTypes.STRING(50),
    shipping_id: DataTypes.INTEGER,
    tax_id: DataTypes.INTEGER
  }, {});
  orders.associate = function(models) {
    orders.belongsTo(models.customer, {foreignKey: 'customer_id', as: 'customer'});
    orders.belongsTo(models.shipping, {foreignKey: 'shipping_id', as: 'shipping'});
    orders.belongsTo(models.tax, {foreignKey: 'tax_id', as: 'tax'});
  };
  return orders;
};