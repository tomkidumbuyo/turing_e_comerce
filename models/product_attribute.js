'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_attribute = sequelize.define('product_attribute', {
    product_id: DataTypes.INTEGER,
    attribute_value_id: DataTypes.INTEGER,
  }, {
    freezeTableName: true,
    timestamps: false
  });
  product_attribute.associate = function(models) {
    product_attribute.belongsTo(models.product, {foreignKey: 'product_id', as: 'product'});
    product_attribute.belongsTo(models.attribute_value, {foreignKey: 'attribute_value_id', as: 'attribute_value'});
  };
  product_attribute.removeAttribute('id');
  return product_attribute;
};