import React from 'react';
import { Text, View } from 'react-native';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Hello</Text> */}
      <Dashboard />
    </View>
  );
};

export default App;
