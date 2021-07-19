import React, { useContext } from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import UserContext from '../../context/UserContext';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import Profiles from '../screens/Profiles';
import Profile from '../screens/Profile';
import Post from '../screens/Post';
import Gallery from '../screens/Gallery';

export default AppStack = () => {
    const AppStackNav = createStackNavigator();
    const user = {
        isLoggedIn: false
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
}