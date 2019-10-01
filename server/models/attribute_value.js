'use strict';
module.exports = (sequelize, DataTypes) => {
  const attribute_value = sequelize.define('attribute_value', {
    attribute_value_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    attribute_id: DataTypes.INTEGER,
    value: DataTypes.STRING(100),
  }, {});
  attribute_value.associate = function(models) {
    attribute_value.belongsTo(models.attributes, {foreignKey: 'attribute_id', as: 'attribute'});
  };
  return attribute_value;
};