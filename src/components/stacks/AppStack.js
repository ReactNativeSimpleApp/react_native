import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import Profiles from '../screens/Profiles';
import Profile from '../screens/Profile';
import Gallery from '../screens/Gallery';

export default AppStack = () => {
    const AppStackNav = createStackNavigator();

    return (
        <AppStackNav.Navigator headerMode="none">
            {/* Check if user is logged in  */}
            <AppStackNav.Screen name="Main" component={MainStack} />
            <AppStackNav.Screen name="Auth" component={AuthStack} />

        </AppStackNav.Navigator>
    );
}