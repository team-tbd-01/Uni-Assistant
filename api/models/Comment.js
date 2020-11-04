const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {}

  Comment.init({
    content: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      }
    },
  },
  {
    sequelize,
    modelName: 'comment'
  });

  Comment.associate = (models) => {
    // associations can be defined here
    models.Comment.belongsTo(models.Post);
    models.Comment.belongsTo(models.User);
    models.Comment.hasMany(models.Commentlike);
  };

  return Comment;
};