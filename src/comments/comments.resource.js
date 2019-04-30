const Sequelize = require('sequelize');
const Db = require('../db');

class Comment extends Sequelize.Model {}

Comment.init({
  message: {
    type: Sequelize.STRING(140),
    allowNull: false
  }
}, {
  underscored: true,
  modelName: 'comment',
  sequelize: Db
});

module.exports = Comment;