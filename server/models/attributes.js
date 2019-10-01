'use strict';
module.exports = (sequelize, DataTypes) => {
  const attributes = sequelize.define('attributes', {
    attribute_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING(100)
  }, {});
  attributes.associate = function(models) {
  };
  return attributes;
};