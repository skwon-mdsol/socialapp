const Db = require('../db');
const Sequelize = require('sequelize');

const Post = Db.define('post', {
  message: {
    type: Sequelize.STRING(140),
    allowNull: false
  },

  title: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
});

module.exports = Post;
