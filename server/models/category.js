const uuid = require('uuid/v4'); // ES5
'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {

    category_id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
      // type: DataTypes.UUID,
      // defaultValue: uuid()
    },
    department_id: DataTypes.INTEGER,
    name: DataTypes.STRING(100),
    description: DataTypes.TEXT

  }, {
    freezeTableName: true,
    timestamps: false
  });
  category.associate = function(models) {
    category.belongsTo(models.department, {foreignKey: 'department_id', as: 'department'});

  };
  return category;
};