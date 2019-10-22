const uuid = require('uuid/v4'); // ES5
'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_detail = sequelize.define('order_detail', {
    item_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      // type: DataTypes.UUID,
      // defaultValue: uuid()
    },
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    attributes: DataTypes.STRING(1000),
    product_name: DataTypes.STRING(100),
    quantity: DataTypes.INTEGER,
    unit_cost: DataTypes.DECIMAL(10,2)
  }, {
    freezeTableName: true,
    timestamps: false
  });
  order_detail.associate = function(models) {
    order_detail.belongsTo(models.orders, {foreignKey: 'order_id', as: 'order'});
    order_detail.belongsTo(models.product, {foreignKey: 'product_id', as: 'product'});

  };
  return order_detail;
};