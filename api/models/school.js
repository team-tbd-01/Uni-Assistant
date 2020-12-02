'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class School extends Model {}

  School.init({
    schoolname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255],
        notEmpty: true,
      }
    },
  }, {
    sequelize,
    modelName: 'school'
  });

  School.associate = (models) => {
    // associations can be defined here

    models.School.hasMany(models.Course);
  };

  return School;
};