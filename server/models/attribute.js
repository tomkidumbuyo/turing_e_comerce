const uuid = require('uuid/v4'); // ES5
'use strict';
module.exports = (sequelize, DataTypes) => {
  const attribute = sequelize.define('attribute', {
    attribute_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      // type: DataTypes.UUID,
      // defaultValue: uuid()
    },
    name: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: false
  });
  attribute.associate = function(models) {
    // associations can be defined here
  };
  return attribute;
};