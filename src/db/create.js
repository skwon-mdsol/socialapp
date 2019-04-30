const Db = require('./index');
const Post = require('../posts/posts.resource');
const Comment = require('../comments/comments.resource');
Db.sync({ logging: console.log }).then(res => {
  console.log(res)
  console.log('After creating db tables');
}).catch(e => console.log(e));
