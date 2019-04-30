import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';

import Posts from './Posts';
import Card from './Card';
import client from './client';

const Header = () => (
  <div className='navbar-container'>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='#'>Social App</a>
    </nav>
    <br />
  </div>
);

const Body = () => (
  <div className='row'>
    <div className='col col-sm-3'>
      <Card>Sidebar</Card>
    </div>
    <div className='col col-sm-9'>
      <Posts />
    </div>
  </div>
)

const App = () => {
  return <ApolloProvider client={client}>
    <div className='container'>
      <Header />
      <Body />
    </div>
  </ApolloProvider>
}

const mainContainer = document.getElementById('main');
ReactDOM.render(<App />, mainContainer);
