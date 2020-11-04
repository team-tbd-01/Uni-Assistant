'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Department extends Model {}

  Department.init({
    departmentname: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 255],
        notEmpty: true,
      }
    },
    abbreviation: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 255],
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'department'
  });

  Department.associate = (models) => {
    // associations can be defined here

    models.Department.hasMany(models.Course);
  };

  return Department;
};