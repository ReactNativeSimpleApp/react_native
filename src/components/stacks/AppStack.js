import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import Profile from '../screens/Profile';
import Post from '../screens/Post';

export default AppStack = () => {
  const AppStackNav = createStackNavigator();
  const user = {
    isLoggedIn: true,
  };

  return (
    <AppStackNav.Navigator headerMode="none">
      {user.isLoggedIn ? (
        <AppStackNav.Screen name="Main" component={MainStack} />
      ) : (
        <AppStackNav.Screen name="Auth" component={AuthStack} />
      )}
      <AppStackNav.Screen name="Profile" component={Profile} />
      <AppStackNav.Screen name="Post" component={Post} />
    </AppStackNav.Navigator>
  );
};
