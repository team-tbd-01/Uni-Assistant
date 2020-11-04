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
    // associations can be defined here
  };

  return User;
};