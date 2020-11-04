'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Course extends Model {}

  Course.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 255],
        notEmpty: true,
      }
    },
    course_code: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 10],
        notEmpty: true,
      }
    },
  }, {
    sequelize,
    modelName: 'course'
  });

  Course.associate = (models) => {
    // associations can be defined here
  };

  return Course;
};