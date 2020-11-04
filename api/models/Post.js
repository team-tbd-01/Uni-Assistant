const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init({
    content: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      }
    },
  },
  {
    sequelize,
    modelName: 'post'
  });

  Post.associate = (models) => {
    // associations can be defined here
    models.Post.hasMany(models.Comment);
    models.Post.belongsTo(models.User);
    models.Post.belongsTo(models.Course);
  };

  return Post;
};