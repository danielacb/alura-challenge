import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_HYGRAPH_API,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_HYGRAPH_TOKEN}`,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
