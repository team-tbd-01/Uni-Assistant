const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Roleuser extends Model {}

  Roleuser.init({
    roleuser_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
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