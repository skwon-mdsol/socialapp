const Db = require('../db');
const Sequelize = require('sequelize');
const Comment = require('../comments/comments.resource');

class Post extends Sequelize.Model {}
Post.init({
  message: {
    type: Sequelize.STRING(140),
    allowNull: false
  },

  title: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
}, {
  underscored: true,
  sequelize: Db,
  modelName: 'post'
});

Post.hasMany(Comment);
Comment.belongsTo(Post);

module.exports = Post;
