const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Roleuser extends Model {}

  Roleuser.init({
    roleuser_id: {
      type: DataTypes.Integer,
      primaryKey: true
    },
  },
  {
    sequelize,
    modelName: 'roleuser'
  });

  Roleuser.associate = (models) => {
    models.Roleuser.hasMany(models.User);
    models.Roleuser.belongsTo(models.Role);
  };

  return Roleuser;
};