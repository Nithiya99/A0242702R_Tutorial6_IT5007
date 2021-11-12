import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import WaitList from './src/WaitList';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://10.0.2.2:5000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <WaitList />
    </ApolloProvider>
  );
};

export default App;
