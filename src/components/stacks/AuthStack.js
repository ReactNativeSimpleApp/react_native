import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

export default AuthStack = () => {
  const AuthStackNav = createStackNavigator();

  return (
    <AuthStackNav.Navigator headerMode="none">
      <AuthStackNav.Screen name="SignIn" component={SignIn} />
      <AuthStackNav.Screen name="SignUp" component={SignUp} />
    </AuthStackNav.Navigator>
  );
};
