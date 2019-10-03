const uuid = require('uuid/v4'); // ES5
'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    review_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      // type: DataTypes.UUID,
      // defaultValue: uuid()
    },
    customer_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    created_on: DataTypes.DATE
  }, {
    freezeTableName: true,
    timestamps: false
  });
  review.associate = function(models) {
    review.belongsTo(models.customer, {foreignKey: 'customer_id', as: 'customer'});
    review.belongsTo(models.product, {foreignKey: 'product_id', as: 'product'});
  };
  return review;
};