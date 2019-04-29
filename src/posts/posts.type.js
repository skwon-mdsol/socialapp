const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'PostType',
  description: 'A social media post',
  fields: {
    message: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) }
  },
});
