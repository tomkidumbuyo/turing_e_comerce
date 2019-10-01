'use strict';
module.exports = (sequelize, DataTypes) => {
  const shopping_cart = sequelize.define('shopping_cart', {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    cart_id: DataTypes.STRING(32),
    product_id: DataTypes.INTEGER,
    attributes: DataTypes.STRING(1000),
    quantity: DataTypes.INTEGER,
    buy_now: DataTypes.BOOLEAN,
    added_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  }, {});
  shopping_cart.associate = function(models) {
    shopping_cart.belongsTo(models.product, {foreignKey: 'product_id', as: 'product'});
  };
  return shopping_cart;
};