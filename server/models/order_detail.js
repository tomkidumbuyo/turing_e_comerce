'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_detail = sequelize.define('order_detail', {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    attributes: DataTypes.STRING(1000),
    product_name: DataTypes.STRING(100),
    quantity: DataTypes.INTEGER,
    unit_cost: DataTypes.DECIMAL(10,2)
  }, {});
  order_detail.associate = function(models) {
    order_detail.belongsTo(models.orders, {foreignKey: 'order_id', as: 'order'});
    order_detail.belongsTo(models.product, {foreignKey: 'product_id', as: 'product'});

  };
  return order_detail;
};