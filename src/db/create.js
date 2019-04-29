const Post = require('../posts/post.resource');

(async () => {
  console.log('Creating Post Table')
  await Post.sync();
})();

process.exit(0);
