import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Gallery from '../screens/Gallery';
import Profiles from '../screens/Profiles';

export default MainStack = () => {
  const MainS = createBottomTabNavigator();
  const tabBarOptions = {
    showLabel: true,
    style: {
      borderTopWidth: 1,
      borderTopColor: '#17a2b8',
      backgroundColor: '#222222',
    },
  };

  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused}) => {
      let iconName = 'md-home';

      switch (route.name) {
        case 'Home':
          iconName = 'md-home';
          break;
        case 'Gallery':
          iconName = 'md-images';
          break;
        case 'Profiles':
          iconName = 'md-people';
          break;
        default:
          iconName = 'md-home';
      }
      return (
        <Ionicons
          name={iconName}
          size={24}
          color={focused ? '#17a2b8' : '#666'}
        />
      );
    },
  });
  return (
    <MainS.Navigator
      screenOptions={screenOptions}
      tabBarOptions={tabBarOptions}>
      <MainS.Screen name="Home" component={Home} />
      <MainS.Screen name="Gallery" component={Gallery} />
      <MainS.Screen name="Profiles" component={Profiles} />
    </MainS.Navigator>
  );
};
