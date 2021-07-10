import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './AuthStack';

export default AppStack = () => {
    const AppStackNav = createStackNavigator();

    return (
        <AppStackNav.Navigator headerMode="none">
            <AppStackNav.Screen name="Auth" component={AuthStack} />
        </AppStackNav.Navigator>
    );
}