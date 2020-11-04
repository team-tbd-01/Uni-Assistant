const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Role extends Model {}

  Role.init({
    role_id: {
      type: DataTypes.Integer,
      primaryKey: true
    },
  },
  {
    sequelize,
    modelName: 'roleuser'
  });

  Role.associate = (models) => {
    models.Role.hasMany(models.Roleuser);
  };

  return Role;
};