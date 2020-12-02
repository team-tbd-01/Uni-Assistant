const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Commentlike extends Model {}

  Commentlike.init({
    like_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
  },
  {
    sequelize,
    modelName: 'commentlike'
  });

  Commentlike.associate = (models) => {
    models.Commentlike.belongsTo(models.Comment);
    models.Commentlike.belongsTo(models.User);
  };

  return Commentlike;
};