import React from 'react';
import type {Node} from 'react';
import hotelsService from './src/services/hotelsService';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import AppStack from './src/components/stacks/AppStack';

const App: () => Node = () => {
  console.log(hotelsService.getPosts());
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
