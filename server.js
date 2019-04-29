const express = require('express');
const graphqlHTTP = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList
} = require('graphql');
const PostType = require('./src/posts/posts.type');
const Post = require('./src/posts/posts.resource');
const app = express();

const RootQueryType = new GraphQLObjectType({
  name: 'rootQuery',
  description: 'root of the endpoint',
  fields: {
    posts: {
      type: new GraphQLList(PostType),
      resolve: (obj, args) => {
        return Post.findAll();
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: RootQueryType
});


app.set('view engine', 'pug')
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
