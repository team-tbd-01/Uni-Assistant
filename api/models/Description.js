'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Description extends Model {}

  Description.init({
    content: {
      type: DataTypes.TEXT,
      validate: {
        len: [3, 255],
        notEmpty: true
       }
      },
    },
     {
    sequelize,
    modelName: 'description'
  });

  Description.associate = (models) => {
    // associations can be defined here

    models.Description.hasMany(models.User);
    models.Description.hasMany(models.Course);
  };

  return Description;
};