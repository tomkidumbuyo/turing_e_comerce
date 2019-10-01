'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_category = sequelize.define('product_category', {
    product_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
  }, {});
  product_category.associate = function(models) {
    product_category.belongsTo(models.product, {foreignKey: 'product_id', as: 'product'});
    product_category.belongsTo(models.category, {foreignKey: 'category_id', as: 'category'});

  };
  return product_category;
};