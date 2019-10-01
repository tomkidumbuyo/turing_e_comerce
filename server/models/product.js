'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING(100),
    description: DataTypes.STRING(1000),
    price: DataTypes.DECIMAL(10,2),
    discounted_price: DataTypes.DECIMAL(10,2),
    image: DataTypes.STRING(150),
    image_2: DataTypes.STRING(150),
    thumbnail: DataTypes.STRING(150),
    display: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};