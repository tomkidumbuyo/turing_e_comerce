const uuid = require('uuid/v4'); // ES5
'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    order_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      // type: DataTypes.UUID,
      // defaultValue: uuid()
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
  }, {
    freezeTableName: true,
    timestamps: false
  });
  orders.associate = function(models) {
    orders.belongsTo(models.customer, {foreignKey: 'customer_id', as: 'customer'});
    orders.belongsTo(models.shipping, {foreignKey: 'shipping_id', as: 'shipping'});
    orders.belongsTo(models.tax, {foreignKey: 'tax_id', as: 'tax'});
  };
  return orders;
};