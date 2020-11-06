'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 15],
        notEmpty: true,
      }
    },
    password: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 255],
          notEmpty: true,
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 255],
          notEmpty: true,
          isEmail: true
        }
    },
    first_name: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 255],
          notEmpty: true
        }
    },
    last_name: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 255],
          notEmpty: true
        }
    },
  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    models.User.hasMany(models.Post);
    models.User.hasMany(models.Commentlike);
    models.User.hasMany(models.Comment);
    models.User.belongsTo(models.Description);
    models.User.belongsTo(models.Roleuser);
  };

  return User;
};