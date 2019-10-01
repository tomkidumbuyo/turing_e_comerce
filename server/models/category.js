'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {

    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    department_id: DataTypes.INTEGER,
    name: DataTypes.STRING(100),
    description: DataTypes.TEXT(1000)

  }, {});
  category.associate = function(models) {
    category.belongsTo(models.department, {foreignKey: 'department_id', as: 'department'});

  };
  return category;
};