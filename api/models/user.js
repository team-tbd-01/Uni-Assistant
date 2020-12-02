'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 15],
        notEmpty: true,
      }
    },
    passwordHash: { type: DataTypes.STRING },
    password: { 
      type: DataTypes.VIRTUAL,
      validate: {
        isLongEnough: (val) => {
          if (val.length < 7) {
            throw new Error("Please choose a longer password");
          }
        },
      },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [0, 255],
          notEmpty: true,
          isEmail: true
        }
    },
    first_name: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 255],
          notEmpty: true
        }
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 255],
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
  User.beforeSave((user, options) => {
    if(user.password) {
      user.passwordHash = bcrypt.hashSync(user.password, 10);
    }
  });
  return User;
};