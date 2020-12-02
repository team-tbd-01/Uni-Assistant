'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Course extends Model {}

  Course.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 255],
        notEmpty: true,
      }
    },
    course_code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 10],
        notEmpty: true,
        allowNull: false,
      }
    },
  }, {
    sequelize,
    modelName: 'course'
  });

  Course.associate = (models) => {
    models.Course.hasMany(models.Post);
    models.Course.belongsTo(models.Description);
  };

  return Course;
};