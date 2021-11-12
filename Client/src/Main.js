import React from 'react';
import {Text, View} from 'react-native';
import WaitList from './WaitList';
const Main = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <WaitList />
    </View>
  );
};
export default Main;
