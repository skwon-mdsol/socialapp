import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Card from './Card'

const GET_POSTS = gql`
  {
    posts {
      message
      title
    }
  }
`;

const Posts = () => {
  return <Query query={GET_POSTS}>
    {({ loading, error, data }) => {
      if (loading) return 'I am loading'
      if (error) return 'Error'
      return data.posts.map(post => (
        <div>
          <Card header={post.title}>{post.message}</Card>
          <br />
        </div>
      ))
    }}
  </Query>
}

export default Posts;