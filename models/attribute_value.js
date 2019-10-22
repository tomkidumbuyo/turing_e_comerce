const uuid = require('uuid/v4'); // ES5
'use strict';
module.exports = (sequelize, DataTypes) => {
  const attribute_value = sequelize.define('attribute_value', {
    attribute_value_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      // type: DataTypes.UUID,
      // defaultValue: uuid()
    },
    attribute_id: DataTypes.INTEGER,
    value: DataTypes.STRING(100),
  }, {
    freezeTableName: true,
    timestamps: false
  });
  attribute_value.associate = function(models) {
    attribute_value.belongsTo(models.attribute, {foreignKey: 'attribute_id', as: 'attribute'});
  };
  return attribute_value;
};