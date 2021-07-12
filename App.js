import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import type {Node} from 'react';
import hotelsService from './src/services/jsonApiServise';
import AppStack from './src/components/stacks/AppStack';

const App: () => Node = () => {
  console.log(hotelsService.getUsers());
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
