import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import type {Node} from 'react';
import AppStack from './src/components/stacks/AppStack';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
