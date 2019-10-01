'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    review_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    customer_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    created_on: DataTypes.DATE
  }, {});
  review.associate = function(models) {
    attribute_value.belongsTo(models.customer, {foreignKey: 'customer_id', as: 'customer'});
    attribute_value.belongsTo(models.product, {foreignKey: 'product_id', as: 'product'});
  };
  return review;
};