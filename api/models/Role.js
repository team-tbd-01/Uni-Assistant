const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Role extends Model {}

  Role.init({
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
  },
  {
    sequelize,
    modelName: 'role'
  });

  Role.associate = (models) => {
    models.Role.hasMany(models.Roleuser);
  };

  return Role;
};